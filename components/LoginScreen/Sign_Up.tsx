import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

const SignScreen = () => {
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false); // State to manage button visibility
  const navigation = useNavigation();

  const accountTypes = ['Agent', 'Agency', 'Owner', 'Buyer', 'Seller', 'Manager'];

  useEffect(() => {
    // Check if terms are agreed upon
    setIsButtonVisible(agreeTerms);
  }, [agreeTerms]);

  const handleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Implement signup logic and navigation here
    }, 1500);
  };

  const renderAccountTypeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.accountTypeItem}
      onPress={() => {
        setAccountType(item);
        setModalVisible(false);
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Username"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Your Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Select your account type</Text>
          <TouchableOpacity
            style={[
              styles.input,
              {
                paddingBottom: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}
            onPress={() => setModalVisible(true)}
          >
            <Text>{accountType ? accountType : 'Select'}</Text>
            <Ionicons name="chevron-down" size={20} color="#333" />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                  <FlatList
                    data={accountTypes}
                    renderItem={renderAccountTypeItem}
                    keyExtractor={(item) => item}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setAgreeTerms(!agreeTerms)}
            >
              {agreeTerms ? (
                <Ionicons name="checkbox" size={24} color="#2f5e99" />
              ) : (
                <Ionicons name="checkbox-outline" size={24} color="#CCCCCC" />
              )}
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Text style={{ flexWrap: 'wrap' }}>
                By submitting this form I agree to the{' '}
                <Text style={styles.termsLink}>Terms and Conditions</Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.button, !agreeTerms && { backgroundColor: '#CCCCCC' }]} // Gray out button if terms are not agreed
            onPress={handleSignUp}
            disabled={!agreeTerms || loading} // Disable button if terms are not agreed or if loading
          >
            {loading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Sign Up</Text>
            )}
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}> LOGIN</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#F5FCFF',
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  termsLink: {
    color: '#2f5e99',
    textDecorationLine: 'underline',
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '60%',
  },
  accountTypeItem: {
    padding: 10,
  },
});

export default SignScreen;
