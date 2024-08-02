import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const Profiletop = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View>
        <View style={styles.container}>
          <View style={styles.userIconContainer}>
            <Image
              source={require('../../assets/images/realprofile.png')}
              style={styles.userIcon}
            />
          </View>
          <TouchableOpacity style={styles.touchableBtn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Login to your account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingsSection}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings & Privacy')}>
            <View style={styles.settingContainer}>
              <FontAwesome name="cog" size={24} color="#2f5e99" />
              <Text style={styles.settingText}>Settings</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.line}></View>

          <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
            <View style={styles.settingContainer}>
              <AntDesign name="questioncircleo" size={24} color="#2f5e99" />
              <Text style={styles.settingText}>Request Demo</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.line}></View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.settingContainer}>
              <FontAwesome6 name="arrow-right-from-bracket" size={24} color="#2f5e99" />
              <Text style={styles.settingText}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.line}></View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Houzi</Text>
          <Text style={styles.footerText}>Version 1.3.7</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Profiletop;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  userIconContainer: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 8, 
    elevation: 6, 
  },
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  touchableBtn: {
    marginTop: 20,
    backgroundColor: '#2f5e99',
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingsSection: {
    marginTop: 76,
    borderRadius: 10,
  },
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 33,
  },
  settingText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  line: {
    width: '80%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 20,
    marginLeft: 32,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: "#aaa",
    textAlign: "center",
  }
});

