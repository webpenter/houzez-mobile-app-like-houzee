import { Image, Linking, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { FontAwesome } from '@expo/vector-icons';
import Privacy_Policy_Details from './Privacy_Policy_Details';
import { useNavigation } from '@react-navigation/native';

const Privacy_Policy = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Privacy Policy ');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>Houzi</Text>
            <Pressable onPress={() => setModalVisible(true)}>
              <Feather name="menu" size={24} color="black" style={styles.menuIcon} />
            </Pressable>
          </View>
          <View style={styles.policyContainer}>
            <Text style={styles.policyTitle}>Privacy Policy</Text>
          </View>
        </View>
        <View>
          <View style={{ paddingHorizontal: 15, paddingTop: 20 }}>
            <Text style={styles.paragraph}>
              When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
            </Text>
            <Text style={styles.paragraph}>
              An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it.{' '}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL('https://automattic.com/privacy/')}
              >
                The Gravatar service privacy policy is available here
              </Text>
              . After approval of your comment, your profile picture is visible to the public in the context of your comment.
            </Text>
            <Text style={styles.paragraph}>
              If you leave a comment on our site you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
            </Text>
            <Text style={styles.paragraph}>
              These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            </Text>
          </View>
          <Privacy_Policy_Details />
        </View>
      </ScrollView>

      {/* Modal */}
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

export default Privacy_Policy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    backgroundColor: '#f9f9f9',
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 13,
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    color: '#333',
    marginLeft: -150,
  },
  menuIcon: {
    marginLeft: 'auto',
  },
  policyContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  policyTitle: {
    letterSpacing: 1.5,
    color: "#2f5e99",
    fontWeight: "400",
    fontSize: 22,
    textAlign: "center",
  },
  modalContainer: {
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
  paragraph: {
    fontSize: 14,
    marginBottom: 12,
    color: '#666',
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});
