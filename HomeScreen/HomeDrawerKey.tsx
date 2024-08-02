import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const HomeDrawerKey = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>What are you looking for?</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('SearchAllPages')}>
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons name="key" size={20} color="#2f5e99" />
          </View>
          <Text style={styles.iconLabel}>For Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('SearchAllPages')}>
          <View style={styles.iconBackground}>
            <AntDesign name="home" size={20} color="#2f5e99" />
          </View>
          <Text style={styles.iconLabel}>For Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('SearchAllPages')}>
          <View style={styles.iconBackground}>
            <FontAwesome5 name="box-open" size={18} color="#2f5e99" />
          </View>
          <Text style={styles.iconLabel}>Commercial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate('SearchAllPages')}>
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons name="hospital-building" size={20} color="#2f5e99" />
          </View>
          <Text style={styles.iconLabel}>Residential</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeDrawerKey;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    // marginLeft : 2,
    letterSpacing : .1
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft:-10
  },
  iconWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconLabel: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    fontWeight : "700"
  },
});
