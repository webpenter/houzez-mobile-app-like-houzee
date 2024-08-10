import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import App_Feature from './App_Feature';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Privacy_Contact from './Privacy_Contact';
import PrivacyUsefulLink from './Privacy_Useful_Link';

const Setting_Privacy_Menu_Details = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Privacy Policy ');
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Houzi</Text>
          <Pressable onPress={() => setModalVisible(true)}>
            <Feather name="menu" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/sph.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.appTitle}>Houzi - Real Estate App</Text>
            <Text style={styles.appDescription}>Real estate app for Houzez WordPress theme</Text>
          </View>
          <View style={styles.buttonRow}>
            <Pressable style={styles.buttonApple}>
              <FontAwesome name='apple' color='white' size={16} />
              <Text style={styles.buttonText}>Apple Store</Text>
            </Pressable>
            <Pressable style={styles.buttonGoogle}>
              <FontAwesome5 name='google-play' color='white' size={16} />
              <Text style={styles.buttonText}>Google Play</Text>
            </Pressable>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonBuyNow}>
              <AntDesign name="shoppingcart" size={16} color="white" />
              <Text style={styles.buttonText}>Buy on CodeCanyon</Text>
            </Pressable>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>How does this work?</Text>
            <Text style={styles.infoText}>Houzi is a Flutter app for Houzez real estate WordPress Theme, available for Android and iOS.</Text>
            <Text style={styles.infoText}>Houzi together with Houzez offers you a full-scale real estate solution for web and mobile.</Text>
            <Pressable style={styles.buttonReadMore}>
              <FontAwesome name="laptop" size={16} color="white" />
              <Text style={styles.buttonText}> Read more</Text>
            </Pressable>
          </View>
        </View>
        <App_Feature/>
       
        <Pricing/>
        <Privacy_Contact/>
        <PrivacyUsefulLink/>
      </ScrollView>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Feather name="x" size={30} color="black" />
            </Pressable>
            <Text style={styles.modalTitle}>Menu</Text>
            <Pressable style={styles.modalItem} onPress={() => handleNavigation('Home')}>
              <Text style={styles.modalText}>Home</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => handleNavigation('App Feature')}>
              <Text style={styles.modalText}>App Feature</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => handleNavigation('Gallery')}>
              <Text style={styles.modalText}>Gallery</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => handleNavigation('Pricing')}>
              <Text style={styles.modalText}>Pricing</Text>
            </Pressable>
            <Pressable style={styles.modalItem} onPress={() => handleNavigation('Contact')}>
              <Text style={styles.modalText}>Contact</Text>
            </Pressable>
            <Pressable style={[styles.modalItem, { marginLeft: 14 }]}>
              <FontAwesome name="android" size={24} color="#2f5e99" />
            </Pressable>
            <Pressable style={[styles.modalItem, { marginTop: -12 }]}>
              <Text style={styles.modalItemText}>Docs</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal : 20
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f8f8', 
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginLeft: 20,
  },
  content: {
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width:400 ,
    height: undefined,
    aspectRatio: 1.5, 
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2f5e99',
    marginBottom: 5,
    letterSpacing: 1,
  },
  appDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonApple: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
    marginRight: 10,
  },
  buttonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#34b7f1', // Updated to a more vibrant blue
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  buttonBuyNow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 10,
    width: 200,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '500',
  },
  infoSection: {
    marginTop: 50,
    padding: 46,
    backgroundColor: '#eee',
    borderRadius: 10,
  
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
    lineHeight: 24,
  },
  buttonReadMore: {
    flexDirection: 'row',
    backgroundColor: '#34b7f1',
    borderRadius: 20,
    paddingVertical: 8,
    width: '50%',
    alignItems  :"center",
    paddingLeft : 10,
    marginTop : 10
  },  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    position: 'relative',
    height: "75%"
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  modalText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 10,
  },
  modalItemText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 1,
  },
});

export default Setting_Privacy_Menu_Details;
