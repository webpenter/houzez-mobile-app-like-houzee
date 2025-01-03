import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure you have react-native-vector-icons installed

const Selectbed = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bedroomContainer}>
        <Icon name="bed" size={24} color="black" style={{marginLeft:12}} />
        <Text style={styles.text}>Bedrooms</Text>
      </View>
      <View style={styles.boxContainer}>
        {numbers.map((number) => (
          <View key={number} style={styles.box}>
            <Text style={styles.boxText}>{number}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bedroomContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    marginLeft: 8,
    fontSize: 18,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    flexDirection: 'row',
    width: '10%',
    height:'5%',
    margin: 4,
    aspectRatio: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  boxText: {
    fontSize: 18,
  },
});

export default Selectbed;
