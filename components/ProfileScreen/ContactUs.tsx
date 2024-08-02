import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); 
  const navigation = useNavigation();

  const handleInputChange = (text, inputType) => {
    switch (inputType) {
      case 'name':
        setName(text);
        break;
      case 'email':
        setEmail(text);
        break;
      case 'website':
        setWebsite(text);
        break;
      case 'message':
        setMessage(text);
        break;
      default:
        break;
    }
    setIsButtonDisabled(!(name && email && message));
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Website:', website);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setWebsite('');
    setMessage('');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator = {true}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            value={name}
            onChangeText={(text) => handleInputChange(text, 'name')}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => handleInputChange(text, 'email')}
          />

          <Text style={styles.label}>Website URL (Optional) </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Website URL"
            value={website}
            onChangeText={(text) => handleInputChange(text, 'website')}
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, { height: 120 }]}
            placeholder="Enter Your Message"
            multiline={true}
            numberOfLines={5}
            value={message}
            onChangeText={(text) => handleInputChange(text, 'message')}
          />

          <TouchableOpacity
            style={[styles.button, isButtonDisabled && { backgroundColor: '#2f5e99' }]}
            onPress={handleSubmit}
            disabled={isButtonDisabled}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height : "100%",
    paddingBottom: 50,
    marginTop : 30
  },
  formContainer: {
    width: '94%',
    borderRadius: 10,
    padding: 20,
    
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    height: 56,
  },
  button: {
    backgroundColor: '#2f5e99',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginLink: {
    color: '#2f5e99',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default ContactUs;
