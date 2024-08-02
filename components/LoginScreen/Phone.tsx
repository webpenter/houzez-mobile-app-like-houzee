import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const PhoneNumber = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Enter Your Phone Number</Text>
        
        <View style={styles.inputContainer}>
          <Image source={require('../../assets/images/flag.png')} style={styles.flagIcon} />
          <Text style={styles.countryCode}>+92</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter Phone Number'
            placeholderTextColor='#888'
            keyboardType='phone-pad'
          />
        </View>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    width: '100%',
    borderRadius: 10,
   
  },
  title: {
    color: '#2f5e99',
    letterSpacing: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 1,
  },
  flagIcon: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  countryCode: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#2f5e99',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 6,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
