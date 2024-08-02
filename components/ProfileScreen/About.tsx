import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Houzi</Text>
      </View>
      <View style={styles.versionInfo}>
        <Text style={styles.versionLabel}>Version</Text>
        <Text style={styles.versionNumber}>1.3.7</Text>
      </View>
      <View style={styles.trademarkInfo}>
        <View style={styles.trademarkRow}>
          <Text style={styles.trademarkText}>Houzi</Text>
          <Text> and the</Text>
          <Text style={styles.trademarkText}> Houzi</Text>
          <Text> logos are the </Text>
        </View>
        <View style={styles.trademarkRow}>
          <Text>tradmarks of</Text>
          <Text style={styles.trademarkText}> BooleanBites Ltd. All</Text>
        </View>
        <View>
          <Text>rights reserved</Text>
        </View>
      </View>
      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings & Privacy')}>
          <Text style={styles.termsText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  header: {
    marginBottom: 26,
  },
  title: {
    fontWeight: '300',
    fontSize: 40,
    letterSpacing: 1.5,
  },
  versionInfo: {
    marginTop: 18,
  },
  versionLabel: {
    color: '#aaa',
    fontSize: 12,
  },
  versionNumber: {
    color: '#aaa',
    fontSize: 12,
  },
  trademarkInfo: {
    marginTop: 30,
  },
  trademarkRow: {
    flexDirection: 'row',
  },
  trademarkText: {
    color: '#2f5e99',
  },
  termsContainer: {
    marginTop: 20,
  },
  termsText: {
    color: '#2f5e99',
    fontWeight: '500',
  },
});
