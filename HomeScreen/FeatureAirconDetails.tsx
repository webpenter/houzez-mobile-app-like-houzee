import { ScrollView, StyleSheet, TextInput, View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const Features = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const locations = [
    'Air Conditioning',
    'Refrigerator',
    'TV Cable',
    'Wifi',
    'Window Converings',
   
  ];

  const filteredLocations = locations.filter(location =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
          <AntDesign name="search1" size={20} color="#aaa" />
        </View>
      </View>

      <View style={styles.locationList}>
        {filteredLocations.map((location, index) => (
          <Pressable key={index} style={styles.locationItem}>
            <Text style={styles.locationText}>{location}</Text>
            <View style={styles.divider}></View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#25ADDE',
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  input: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  locationList: {
    padding: 12,
  },
  locationItem: {
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    marginLeft: 18,
    paddingVertical: 6,
    fontWeight: '600',
  },
  divider: {
    height: .5,
    backgroundColor: '#a1a7a8',
    marginHorizontal : 4
  },
});
