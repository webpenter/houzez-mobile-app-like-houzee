import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Searchtop = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle-outline" size={30} color="#2f5e99" style={styles.icon} />
      <Text style={styles.text}>I want to</Text>
     
    </View>
  );
};

export default Searchtop;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:12
  
  },
  text: {
    fontSize: 18,
    color:'gray'
  },
  icon: {
    marginRight: 16,
    marginLeft:18,
    padding: 2,
    fontWeight:'800'
  },
});



