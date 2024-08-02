import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const SocialLoginPlatform = () => {
  const [facebookUser, setFacebookUser] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);

  // Facebook Login
  const [facebookRequest, facebookResponse, promptFacebookAsync] = Facebook.useAuthRequest({
    clientId: '1694065874671768',
    responseType: 'token',
  });

  useEffect(() => {
    if (facebookResponse?.type === 'success') {
      fetchFacebookUserData(facebookResponse.params.access_token);
    }
  }, [facebookResponse]);

  const fetchFacebookUserData = (accessToken) => {
    fetch(`https://graph.facebook.com/me?fields=name,email,picture&access_token=${accessToken}`)
      .then((res) => res.json())
      .then((data) => {
        setFacebookUser(data);
        AsyncStorage.setItem('facebookUser', JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error fetching Facebook user data: ', error);
        Alert.alert('Error', 'Failed to fetch Facebook user data');
      });
  };

  // Google Login
  const [googleRequest, googleResponse, promptGoogleAsync] = Google.useAuthRequest({
    webClientId: '767600690363-7hd385ndk4ue73sjq0j8i38kqa4nfgip.apps.googleusercontent.com',
    iosClientId: '902005915094-duok0ru136hj7mft5osj371fd2mot5gk.apps.googleusercontent.com',
    androidClientId: '767600690363-7hss48rk2pr8budp45c1j2ch6jae74ht.apps.googleusercontent.com',
    responseType: 'token',
  });

  useEffect(() => {
    if (googleResponse?.type === 'success') {
      fetchGoogleUserData(googleResponse.authentication);
    }
  }, [googleResponse]);

  const fetchGoogleUserData = async (authentication) => {
    try {
      const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${authentication.accessToken}`
        },
      });
      const userInfo = await userInfoResponse.json();
      setGoogleUser(userInfo);
      AsyncStorage.setItem('googleUser', JSON.stringify(userInfo));
    } catch (error) {
      console.error('Error fetching Google user data:', error);
      Alert.alert('Error', 'Failed to fetch Google user data');
    }
  };

  if (facebookResponse?.type === 'loading' || googleResponse?.type === 'loading') {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <View style={styles.container}>
      {facebookUser ? (
        <View style={styles.userInfoContainer}>
          {facebookUser.picture && <Image source={{ uri: facebookUser.picture.data.url }} style={styles.profileImage} />}
          <Text>Welcome: {facebookUser.name}!</Text>
          <Text>Email: {facebookUser.email}</Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.socialLoginButton} onPress={() => promptFacebookAsync()}>
          <Ionicons name="logo-facebook" size={24} color="blue" />
          <Text style={styles.socialLoginButtonText}>Facebook</Text>
        </TouchableOpacity>
      )}

      {googleUser ? (
        <View style={styles.userInfoContainer}>
          <Image source={{ uri: googleUser.picture }} style={styles.profileImage} />
          <Text>Welcome: {googleUser.name}!</Text>
          <Text>Email: {googleUser.email}</Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.socialLoginButton} onPress={() => promptGoogleAsync()}>
          <SimpleLineIcons name="social-google" size={24} color="red" />
          <Text style={styles.socialLoginButtonText}>Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection : "row",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap : 20
  },
  userInfoContainer: {
    borderColor: 'red',
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 27,
    marginBottom: 20,
  },
  socialLoginButtonText: {
    marginLeft: 10,
  },
});

export default SocialLoginPlatform;
