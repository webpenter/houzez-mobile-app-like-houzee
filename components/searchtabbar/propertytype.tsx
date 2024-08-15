import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Propertytype = () => {
  const [activeButton, setActiveButton] = useState('All'); // State to track active button
  const [activeSubButtons, setActiveSubButtons] = useState([]); // State to track active sub buttons

  // Function to handle button press and update active state
  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    setActiveSubButtons([]); // Reset active sub buttons when main button changes
  };

  // Function to handle sub button press and update active state
  const handleSubButtonPress = (subButtonName) => {
    // Check if the sub button is already active
    if (activeSubButtons.includes(subButtonName)) {
      // Remove the sub button from activeSubButtons
      setActiveSubButtons(activeSubButtons.filter(button => button !== subButtonName));
    } else {
      // Add the sub button to activeSubButtons
      setActiveSubButtons([...activeSubButtons, subButtonName]);
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <FontAwesome name="map-signs" size={24} color="black" style={styles.icon} />
          <Text style={styles.cityText}>Property types</Text>
        </View>
        
        {/* Horizontal scroll for main buttons */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.buttonRow}
        >
          <TouchableOpacity
            style={[styles.button, activeButton === 'All' && styles.activeButton]}
            onPress={() => handleButtonPress('All')}>
            <Text style={[styles.buttonText, activeButton === 'All' && styles.activeButtonText]}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, activeButton === 'Commercial' && styles.activeButton]}
            onPress={() => handleButtonPress('Commercial')}>
            <Text style={[styles.buttonText, activeButton === 'Commercial' && styles.activeButtonText]}>Commercial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, activeButton === 'Residential' && styles.activeButton]}
            onPress={() => handleButtonPress('Residential')}>
            <Text style={[styles.buttonText, activeButton === 'Residential' && styles.activeButtonText]}>Residential</Text>
          </TouchableOpacity>
        </ScrollView>
        
        {/* Conditional rendering based on active button */}
        <View style={styles.subButtonContainer}>
          {activeButton === 'Commercial' && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={[styles.subButton, activeSubButtons.includes('Office') && styles.activeSubButton]}
                onPress={() => handleSubButtonPress('Office')}>
                <Text style={[styles.subButtonText, activeSubButtons.includes('Office') && styles.activeSubButtonText]}>Office</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.subButton, activeSubButtons.includes('Shop') && styles.activeSubButton]}
                onPress={() => handleSubButtonPress('Shop')}>
                <Text style={[styles.subButtonText, activeSubButtons.includes('Shop') && styles.activeSubButtonText]}>Shop</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.subButton, activeSubButtons.includes('Warehouse') && styles.activeSubButton]}
                onPress={() => handleSubButtonPress('Warehouse')}>
                <Text style={[styles.subButtonText, activeSubButtons.includes('Warehouse') && styles.activeSubButtonText]}>Warehouse</Text>
              </TouchableOpacity>
            </ScrollView>
          )}

          {activeButton === 'Residential' && (
            <ScrollView contentContainerStyle={styles.residentialSubButtons} showsVerticalScrollIndicator={false}>
              <View style={styles.rowOfSubButtons}>
                <TouchableOpacity
                  style={[styles.subButton, activeSubButtons.includes('Apartment') && styles.activeSubButton]}
                  onPress={() => handleSubButtonPress('Apartment')}>
                  <Text style={[styles.subButtonText, activeSubButtons.includes('Apartment') && styles.activeSubButtonText]}>Apartment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subButton, activeSubButtons.includes('Condo') && styles.activeSubButton]}
                  onPress={() => handleSubButtonPress('Condo')}>
                  <Text style={[styles.subButtonText, activeSubButtons.includes('Condo') && styles.activeSubButtonText]}>Condo</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rowOfSubButtons}>
                <TouchableOpacity
                  style={[styles.subButton, activeSubButtons.includes('Multi Family Home') && styles.activeSubButton]}
                  onPress={() => handleSubButtonPress('Multi Family Home')}>
                  <Text style={[styles.subButtonText, activeSubButtons.includes('Multi Family Home') && styles.activeSubButtonText]}>Multi Family Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subButton, activeSubButtons.includes('Single Family Home') && styles.activeSubButton]}
                  onPress={() => handleSubButtonPress('Single Family Home')}>
                  <Text style={[styles.subButtonText, activeSubButtons.includes('Single Family Home') && styles.activeSubButtonText]}>Single Family Home</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rowOfSubButtons}>
                <TouchableOpacity
                  style={[styles.subButton, activeSubButtons.includes('Studio') && styles.activeSubButton]}
                  onPress={() => handleSubButtonPress('Studio')}>
                  <Text style={[styles.subButtonText, activeSubButtons.includes('Studio') && styles.activeSubButtonText]}>Studio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.subButton, activeSubButtons.includes('Villa') && styles.activeSubButton]}
                  onPress={() => handleSubButtonPress('Villa')}>
                  <Text style={[styles.subButtonText, activeSubButtons.includes('Villa') && styles.activeSubButtonText]}>Villa</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
      <View style={styles.borderLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 15,
  },
  container: {
    marginTop: 12,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  icon: {
    marginLeft: 18,
    color: '#004768',
  },
  cityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },

  buttonRow: {

    flexDirection: 'row',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
    marginLeft:10,
  },
  button: {
    backgroundColor: '#c5c5c5',
    paddingVertical: 5,
    paddingHorizontal: 27,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 0,
    overflow: 'hidden'

   
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  activeButton: {
    backgroundColor: '#004768',
   
  },
  activeButtonText: {
    color: '#00AFFF',
  },
  subButtonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  subButton: {
    backgroundColor: '#c5c5c5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 5,
  },
  subButtonText: {
    fontSize: 14,
    color: 'black',
  },
  residentialSubButtons: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  rowOfSubButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginRight: 15, // Add right margin here
  },
  borderLine: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
  },
  activeSubButton: {
    backgroundColor: '#004768',
  },
  activeSubButtonText: {
    color: '#00AFFF',
  },
});

export default Propertytype;
