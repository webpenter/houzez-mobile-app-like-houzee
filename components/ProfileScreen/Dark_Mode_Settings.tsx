import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const Dark_Mode_Settings = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>On</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Off</Text>
        <MaterialIcons name="radio-button-checked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Use System Settings</Text>
          <Text style={styles.infoText}>We'll adjust your appearance based on your device's system settings.</Text>
        </View>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
    </View>
  );
};

export default Dark_Mode_Settings;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    marginTop : 10
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    justifyContent: 'space-between', 
  },
  text: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    fontWeight:"600"
  },
  infoContainer: {
    flex: 1,
    marginRight: 12, 
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
