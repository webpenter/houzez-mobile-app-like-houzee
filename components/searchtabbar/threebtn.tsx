import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Searchtopp = () => {
  const [activeButton, setActiveButton] = useState('All');

  return (
    <View>
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'All' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('All')}
        >
          <Text style={[
            styles.buttonText,
            activeButton === 'All' && styles.activeButtonText,
          ]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'For Rent' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('For Rent')}
        >
          <Text style={[
            styles.buttonText,
            activeButton === 'For Rent' && styles.activeButtonText,
          ]}>For Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'For Sale' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('For Sale')}
        >
          <Text style={[
            styles.buttonText,
            activeButton === 'For Sale' && styles.activeButtonText,
          ]}>For Sale</Text>
        </TouchableOpacity>
      </View>
      </View>
      {/* Horizontal line */}
      <View style = {{borderColor : "gray" , borderWidth : 1,width:'100%'}}></View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '60%',
    marginLeft: 28,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#c5c5c5',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 0,
  },
  activeButton: {
    backgroundColor: '#004768',
  },
  buttonText: {
    color: 'black',
  },
  activeButtonText: {
    color: '#00AFFF',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 10,
    width:350,
    marginRight:-10
  },
});

export default Searchtopp;
