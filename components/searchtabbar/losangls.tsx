import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LocationCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon name="location-on" size={24} color="black" style={styles.icon} />
          <Text style={styles.cityText}>City</Text>
        </View>
       
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.navigate('Selectcity')}>
          <Text style={styles.locationText}>Please Select</Text>
          <FontAwesome6 name="angle-right" size={24} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
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
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  icon: {
    marginLeft: 8,
    color: '#004768',
  },
  cityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  locationText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  arrowIcon: {
    color: '#004768',
    
  },
  borderLine: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    width:365,
   marginLeft:-30
  },
});

export default LocationCard;
