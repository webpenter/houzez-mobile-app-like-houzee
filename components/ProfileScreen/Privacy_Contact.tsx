import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

const Privacy_Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact</Text>
        <Text style={styles.subHeaderText}>
          We believe that it doesn’t cost a thing to talk, so why not get in touch with us and begin this awesome journey. Get answers before you buy.
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <EvilIcons name="location" size={34} color="#2f5e99" />
          <Text style={styles.infoTitle}>ADDRESS</Text>
          <Text style={styles.infoText}>Johar Town 2, Lahore,</Text>
          <Text style={styles.infoText}>Pakistan</Text>
        </View>
        <View style={styles.infoSection}>
          <Fontisto name="email" size={34} color="#2f5e99" />
          <Text style={styles.infoTitle}>EMAIL US</Text>
          <Text style={styles.infoText}>houzi@booleanbites.com</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder='Your Name' />
        <TextInput style={styles.input} placeholder='Your Email' />
        <TextInput style={styles.input} placeholder='Message' multiline numberOfLines={4} />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Send Message</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerText: {
    color: "#2f5e99",
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  },
  subHeaderText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoSection: {
    marginBottom: 20,
    // backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#ddd',
  },
  infoTitle: {
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#2f5e99',
    textAlign: 'center',
    fontSize: 18,
  },
  infoText: {
    color: '#555',
    textAlign: 'center',
    fontSize: 16,
  },
  formContainer: {
    // backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width:"100%"
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fafafa',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2f5e99',
    borderRadius: 4,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Privacy_Contact;
