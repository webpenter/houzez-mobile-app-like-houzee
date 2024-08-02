import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SocialLoginPlatform from './SocialLoginPlatform';

const Login = () => {
 const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
   <ScrollView showsHorizontalScrollIndicator = {false}>
     <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username / Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Your Email Address or Username'
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder='Enter Your Password'
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity style={styles.passwordIcon} onPress={togglePasswordVisibility}>
            <Feather name={passwordVisible ? "eye-off" : "eye"} size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <Text style={styles.signUpLink}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('Forgot Password')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.continueWithPhoneContainer}>
        <TouchableOpacity style={styles.phoneButton} onPress={()=> navigation.navigate('Phone')}>
          <Feather name="phone" size={24} color="black" style={styles.phoneIcon} />
          <Text style={styles.phoneButtonText}>Continue with Phone</Text>
        </TouchableOpacity>
      </View>
    
      <SocialLoginPlatform/>
    </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    paddingTop : 30,
    height : "100%"
  },
  formContainer: {
    width: '94%',
    borderRadius: 10,
    padding: 20,
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    height: 56,
    borderRadius: 6,
    paddingLeft: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 18,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 18,
  },
  passwordInput: {
    flex: 1,
    height: 54,
    paddingLeft: 15,
  },
  passwordIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#2f5e99',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 6,
    marginBottom: 18,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signUpText: {
    marginRight: 5,
  },
  signUpLink: {
    color: '#2f5e99',
    fontWeight : "bold"
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#2f5e99',
    fontWeight : "bold"
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap : 20
  },
  socialLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 30,
    
  },
  socialLoginButtonText: {
    marginLeft: 10,
  },
  continueWithPhoneContainer: {
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal : 27
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  phoneIcon: {
    width: 24,
    textAlign: 'center',
  },
  phoneButtonText: {
    marginLeft: 12,
    flex: 1,
    fontWeight : "bold"
  },
});

export default Login;
