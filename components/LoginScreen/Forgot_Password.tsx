import { StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react'

const Forgot_Password = () => {
  return (
    <View>
      <View>
        <View style={{marginTop:30 , marginBottom:16}}>
          <Text style = {{fontWeight : "600" , fontSize : 16 , textAlign : "center" , marginHorizontal : 80, color:"#2f5e99"}}>Enter the email address or user name</Text>
        </View>
        <View style = {{paddingHorizontal : 20}}>
        <View>
        <Text style={styles.label}>Username / Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Your Email Address or Username'
        />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Forgot_Password

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginTop:50
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    height: 54,
    borderRadius: 6,
    paddingLeft: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 30,
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
    // gap : 20
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
    marginBottom: 20,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 20,
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