import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ContactInformation = () => {
  const navigation = useNavigation();
  const options = [
    { text: 'Enquire Info', screen: 'Enquire Information' },
    { text: 'Setup Tour', screen: 'Schedule A Tour' },
    { text: 'Watch Video', screen: 'Watch A Video' },
    { text: 'Virtual Tour', screen: 'Select Location' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Information</Text>
      <View style={styles.contentContainer}>
        <Image source={require('../assets/images/a4.jpg')} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Modern House</Text>
          <Text style={styles.subtitle}>Agency</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Fontisto name="email" size={18} color="white" />
          </View>
          <View style={styles.iconWrapper}>
            <MaterialIcons name="call" size={18} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionContainer}
            onPress={() => navigation.navigate(option.screen)}
          >
            <Text style={styles.optionText}>{option.text}</Text>
            <AntDesign name="right" size={14} color="#333" />
          </TouchableOpacity>

        ))}
      </View>
    </View>
  );
};

export default ContactInformation;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  
    marginHorizontal: 20,
    marginVertical: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2f5e99',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconWrapper: {
    backgroundColor: '#2f5e99',
    height: 38,
    width: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  divider: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderBottomColor : "#ddd",
    borderBottomWidth : .5
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});
