import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, FlatList, Image, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Shudole = () => {
  const [tourType, setTourType] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [isTourTypeModalVisible, setTourTypeModalVisible] = useState(false);
  const [isTimeModalVisible, setTimeModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [accountType, setAccountType] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const tourTypes = ['In Person', 'Video Chat', 'In Seller', 'In Owner'];
  const times = Array.from({ length: 12 }, (_, i) => `${i + 1} ${i < 1 ? 'AM' : 'PM'}`);
  const accountTypes = ['Admin', 'User', 'Guest'];

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate.toDateString());
    hideDatePicker();
  };

  const renderModal = (data, isVisible, setVisible, setSelectedValue) => (
    <Modal transparent={true} visible={isVisible} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  setSelectedValue(item);
                  setVisible(false);
                }}
              >
                <Text style={styles.modalText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );

  const handleSignUp = () => {
    // Handle sign-up logic
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.header}>Tour Information</Text>
          <View style={styles.separator}></View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tour Type</Text>
            <TouchableOpacity style={styles.dropdown} onPress={() => setTourTypeModalVisible(true)}>
              <Text style={styles.textInput}>{tourType || 'Select Tour Type'}</Text>
              <FontAwesome name="chevron-down" size={14} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Time</Text>
            <TouchableOpacity style={styles.dropdown} onPress={() => setTimeModalVisible(true)}>
              <Text style={styles.textInput}>{time || 'Select Time'}</Text>
              <FontAwesome name="chevron-down" size={14} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity style={styles.dropdown} onPress={showDatePicker}>
              <Text style={styles.textInput}>{date || 'Select Date'}</Text>
              <FontAwesome name="chevron-down" size={14} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.header}>Contact Information</Text>
          <View style={styles.separator}></View>
          <View style={styles.contactInfo}>
            <Image source={require('../assets/images/a3.jpg')} style={styles.image} />
            <FontAwesome5 name="user" size={22} color="#2f5e99" style={styles.icon} />
            <Text style={styles.headerText}>  Modern House Real Estate</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>User Name</Text>
            <TextInput style={styles.input} placeholder="Enter Your Username" autoCapitalize="none" autoCorrect={false} />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter Email Address" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter Your Password" secureTextEntry autoCapitalize="none" autoCorrect={false} />
            <Text style={styles.label}>Phone</Text>
            <TextInput style={styles.input} placeholder="Enter Your Phone Number" autoCapitalize="none" autoCorrect={false} />
            <Text style={styles.label}>Type</Text>
            <TouchableOpacity
              style={[styles.input, styles.dropdown]}
              onPress={() => setModalVisible(true)}
            >
              <Text>{accountType || 'Select Account Type'}</Text>
              <Ionicons name="chevron-down" size={20} color="#333" />
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <View style={styles.modalBackground}>
                  <View style={styles.modalContainer}>
                    <FlatList
                      data={accountTypes}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={styles.modalItem}
                          onPress={() => {
                            setAccountType(item);
                            setModalVisible(false);
                          }}
                        >
                          <Text style={styles.modalText}>{item}</Text>
                        </TouchableOpacity>
                      )}
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
              <View style={styles.checkboxTextContainer}>
                <Text style={styles.checkboxText}>
                  By submitting this form I agree to the{' '}
                  <Text style={styles.termsLink}>Terms and Conditions</Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.button, !agreeTerms && { backgroundColor: '#CCCCCC' }]}
              onPress={handleSignUp}
              disabled={!agreeTerms || loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.buttonText}>Submit</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {renderModal(tourTypes, isTourTypeModalVisible, setTourTypeModalVisible, setTourType)}
      {renderModal(times, isTimeModalVisible, setTimeModalVisible, setTime)}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    letterSpacing: 0.7,
  },
  separator: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 20
  },
  inputGroup: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 11,
    backgroundColor: '#f9f9f9'
  },
  textInput: {
    flex: 1,
    fontSize: 16
  },
  icon: {
    marginLeft: 10
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  modalItem: {
    padding: 15,
    width: '100%',
    alignItems: 'center'
  },
  modalText: {
    fontSize: 16
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2f5e99',
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxTextContainer: {
    flex: 1,
  },
  checkboxText: {
    flexWrap: 'wrap',
  },
  termsLink: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Shudole;
