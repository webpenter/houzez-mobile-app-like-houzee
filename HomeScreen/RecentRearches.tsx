import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecentSearches = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Searches</Text>
     <Pressable onPress={() => navigation.navigate('SearchAllPages')}>
     <View style={styles.searchContainer}>
        <FontAwesome name='search' color='#2f5e99' size={20} />
        <Text style={styles.searchText}>Latest Properties</Text>
      </View>
     </Pressable>
    </View>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#aaa',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width : "70%",
    paddingBottom : 50
  },
  searchText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2f5e99',
  },
});
