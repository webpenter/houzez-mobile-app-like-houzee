import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Modal } from 'react-native';

const SettingDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [wordpressUrl, setWordpressUrl] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleReset = () => {
    setWordpressUrl('');
  };

  const handleCancel = () => {
    closeModal();
  };

  const handleSave = () => {
    // Implement save functionality here
    closeModal();
  };

  return (
   <View>
     <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Demo Configuration</Text>
        <Text style={styles.subtitle}>
          Enter your own Wordpress website URL to test with this App. (Houzi Mobile App plugin is required)
        </Text>
      </View>
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder='Enter Wordpress URL'
          placeholderTextColor='#aaa'
          value={wordpressUrl}
          onFocus={openModal}
          onChangeText={(text) => setWordpressUrl(text)}
        />
        <Text style={styles.exampleText}>e.g. http://booleanbites.com/</Text>
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Wordpress URL</Text>
            <TextInput
              style={styles.modalInput}
              placeholder='https://demodomain.com...'
              placeholderTextColor='#aaa'
              value={wordpressUrl}
              onChangeText={(text) => setWordpressUrl(text)}
            />
            <View style={styles.modalButtons}>
              <Pressable style={styles.modalButton} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.modalButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    <View style = {{  height: 1,width: '100%',backgroundColor: '#ccc',marginTop : -15}}></View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 14,
    fontSize: 14,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 12,
  },
  exampleText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
    marginLeft: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop:-250
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    fontSize: 14,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#2f5e99',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SettingDemo;
