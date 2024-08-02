import React, { useState, useEffect } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const SettingItemDesign = () => {
  const [designValue, setDesignValue] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const designs = [
    { id: '1', name: 'design_01' },
    { id: '2', name: 'design_02' },
    { id: '1', name: 'design_03' },
    { id: '2', name: 'design_04' },
    { id: '1', name: 'design_05' },
    { id: '2', name: 'design_06' },
    { id: '1', name: 'design_07' },
    { id: '2', name: 'design_08' },
    // Add more designs as needed
  ];

  const handleSelectDesign = (name) => {
    setDesignValue(name);
    setModalVisible(false);
  };

  const handlePressOutside = (event) => {
    if (event.target === event.currentTarget) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    const handleKeyboardDismiss = () => {
      setModalVisible(false);
    };

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDismiss);
    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Item Theme Design</Text>
            <Text style={styles.sectionSubText}>Customize your item theme design</Text>
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.textInput}
                placeholder='Enter design name'
                value={designValue}
                onChangeText={setDesignValue}
                autoCapitalize="none"
                autoCorrect={false}
                editable={false}  
              />
              <Entypo
                name="chevron-small-down"
                size={24}
                color="#555"
                style={styles.icon}
              />
            </View>
          </Pressable>
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={handlePressOutside}>
              <View style={styles.modalBackdrop}>
                <View style={styles.modalContent}>
                  <FlatList
                    data={designs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity 
                        style={styles.dropdownItem}
                        onPress={() => handleSelectDesign(item.name)}
                      >
                        <Text style={styles.dropdownItemText}>{item.name}</Text>
                        <Entypo name="chevron-small-down" size={24} color="#555" />
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 26,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    marginBottom: 8,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sectionSubText: {
    color: '#666',
    fontSize: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    height: 55,
    paddingTop: 6,
    paddingBottom : 6
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 8,
  
  },
  icon: {
    marginLeft: 12,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 5, 
    marginTop: 200,
    marginLeft : -12
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default SettingItemDesign;
