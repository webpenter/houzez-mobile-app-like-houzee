import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Pricing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pricing</Text>
        <Text style={styles.subHeaderText}>
          Get answers before you buy. Checkout the demo version to know the full features offered in the app.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Buy Houzi</Text>
          <Text style={styles.cardPrice}>$59</Text>
          <Text style={styles.cardSubtitle}>Per instance</Text>
        </View>
        <View style={styles.featuresList}>
          {[
            'Dynamic home sections with many item designs',
            'Advanced Search Filters',
            'Comprehensive property page',
            'Property Images gallery',
            'Agent and Agency list & profiles',
            'Reviews for property & agencies',
            'Favorite properties and Saved searches',
            'Property Inquiry and Contact form',
            'TL supported, ready to translate.',
            'Social login with Facebook, Google, and Apple',
          ].map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <FontAwesome name='check' color='#2f5e99' size={15} />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Buy on CodeCanyon</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Hire us to publish your App</Text>
          <Text style={styles.cardPrice}>$600</Text>
          <Text style={styles.cardSubtitle}>Android iPhone Apps</Text>
        </View>
        <View style={styles.featuresList}>
          {[
            'Buy Houzi at CodeCanyon',
            'Provide icon + splash screen',
            'Theme color customization',
            'Other visual changes',
            'Firebase, Google Cloud integration',
            'Facebook, Google & Apple login',
            'Phone Login integration',
            'Submission to AppleStore',
            'Submission to GooglePlay',
          ].map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <FontAwesome name='check' color='#2f5e99' size={15} />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Hire us on Upwork</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.fiverrButton]}>
            <Text style={styles.buttonText}>Hire us on Fiverr</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.customFeatures}>
        <Text style={styles.customFeaturesTitle}>Custom features</Text>
        <Text style={styles.customFeaturesDescription}>
          If you have any feature or requirements that you want exclusively in your app, contact us and our excellent team will make sure to exceed your expectations.
        </Text>
        <Pressable style={[styles.button, styles.contactButton]}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Houzi is an app that connects with Houzez Wordpress theme. It has an intuitive, clean, and slick UI, offering a great user experience. For more info, you can reach the team at <Text style={styles.email}>houzo@booleanbites.com</Text>
        </Text>
      </View>
    </View>
  );
};

export default Pricing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    marginBottom: 40,
  },
  headerText: {
    color: '#2f5e99',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeaderText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
    fontSize: 16,
  },
  card: {
    marginBottom: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  cardHeader: {
    marginBottom: 20,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardPrice: {
    textAlign: 'center',
    color: '#2f5e99',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardSubtitle: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
  },
  featuresList: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 10,
    color: '#555',
  },
  button: {
    backgroundColor: '#2f5e99',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 5,
  },
  fiverrButton: {
    backgroundColor: 'red',
  },
  contactButton: {
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  customFeatures: {
    marginTop: 30,
    alignItems: 'center',
  },
  customFeaturesTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  customFeaturesDescription: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#555',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  footer: {
    backgroundColor: '#e9ecef',
    padding: 30,
    marginTop: 30,
    borderRadius: 10,
  },
  footerText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
  },
  email: {
    color: '#2f5e99',
    fontSize : 16
  },
});
