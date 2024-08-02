import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
const LanguageScreen = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style = {{color : "rgba(50,44,44,1)",fontWeight : "600" , fontSize : 16 , letterSpacing :.8 , marginBottom : 14}}>Select Language</Text>
        </View>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>English</Text>
        <MaterialIcons name="radio-button-checked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Russian</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Urdu</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Arabic</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Spanish</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Presian</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>American</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Roman</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>British</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.text}>Sariaki</Text>
        <MaterialIcons name="radio-button-unchecked" size={24} color="#2f5e99" />
      </TouchableOpacity>
    </View>
  )
}

export default LanguageScreen ;

const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderRadius: 8,
      borderColor: '#ddd',
      marginTop : 10
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      justifyContent: 'space-between', 
    },
    text: {
      fontSize: 16,
      color: '#333',
      flex: 1,
      fontWeight:"600"
    },
    infoContainer: {
      flex: 1,
      marginRight: 12, 
    },
    infoText: {
      fontSize: 14,
      color: '#666',
      marginTop: 4,
    },
  });