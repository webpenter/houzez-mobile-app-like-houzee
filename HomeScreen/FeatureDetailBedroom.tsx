import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const FeatureDetailBedroom = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator = {false}>
        <View style={styles.featureList}>
          <View style={styles.featureItem}>
            <Ionicons name="bed-outline" size={19} color="#2f5e99" />
            <Text style={styles.featureText}>6 Bedrooms</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialCommunityIcons name="shower" size={19} color="#2f5e99" />
            <Text style={styles.featureText}>3 Bathrooms</Text>
          </View>
          <View style={styles.featureItem}>
            <FontAwesome6 name="car-side" size={16} color="#2f5e99" />
            <Text style={styles.featureText}>1 Garage</Text>
          </View>
          <View style={styles.featureItem}>
            <Image source={require('../assets/images/ruler.png')} style={styles.iconImage} />
            <Text style={styles.featureText}>4300 Sq Ft</Text>
          </View>
          <View style={styles.featureItem}>
            <Feather name="calendar" size={19} color="black" />
            <Text style={styles.featureText}>Available from August</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeatureDetailBedroom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  featureList: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    gap : 16,
    marginTop :8
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    paddingVertical : 6
  
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
});
