import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const FloorPlans = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Floor Plans</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Floor Loading')}>
      <View style={styles.planContainer}>
        <View style={styles.row}>
          <Text style={styles.floorText}>First Floor</Text>
          <View style={styles.viewPlanContainer}>
            <Text style={styles.viewPlanText}>View Floor Plan</Text>
            <AntDesign name="right" size={14} color="#2f5e99" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="bed-queen-outline" size={18} color="#2f5e99" />
            <Text style={styles.infoText}>670 Sqft</Text>
          </View>
          <View style={styles.infoContainer}>
            <FontAwesome5 name="shower" size={18} color="#2f5e99" />
            <Text style={styles.infoText}>530 Sqft</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.infoContainer}>
            <Entypo name="pencil" size={18} color="#2f5e99" />
            <Text style={styles.infoText}>670 Sqft</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
            <Text style={styles.infoText}>530 Sqft</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>

      {/* ===================================================== */}
      <TouchableOpacity onPress={() => navigation.navigate('Floor Loading')}>
      <View style={styles.planContainer}>
        <View style={styles.row}>
          <Text style={styles.floorText}>Second Floor</Text>
          <View style={styles.viewPlanContainer}>
            <Text style={styles.viewPlanText}>View Floor Plan</Text>
            <AntDesign name="right" size={14} color="#2f5e99" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="bed-queen-outline" size={18} color="#2f5e99" />
            <Text style={styles.infoText}>670 Sqft</Text>
          </View>
          <View style={styles.infoContainer}>
            <FontAwesome5 name="shower" size={18} color="#2f5e99" />
            <Text style={styles.infoText}>530 Sqft</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.infoContainer}>
            <Entypo name="pencil" size={18} color="#2f5e99" />
            <Text style={styles.infoText}>670 Sqft</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
            <Text style={styles.infoText}>530 Sqft</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

export default FloorPlans;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  planContainer: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginBottom : 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  floorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewPlanContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewPlanText: {
    color: '#2f5e99',
    marginRight: 8,
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
