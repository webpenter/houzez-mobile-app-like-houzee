import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const TermsCondition = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Community Standards and Legal Policies</Text>
            <Text style={styles.sectionSubText}>Customize your experience on Houzi</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.preferenceItem} onPress={() => navigation.navigate('Terms and Condition')}>
          <MaterialCommunityIcons name="file-document-outline" size={24} color="#2f5e99" style={styles.icon} />
          <Text style={styles.preferenceText}>Terms and Conditions</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.preferenceItem} onPress={() => navigation.navigate('Privacy Policy')}>
          <MaterialIcons name="privacy-tip" size={24} color="#2f5e99" style={styles.icon} />
          <Text style={styles.preferenceText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.preferenceItem} onPress={()=>navigation.navigate('About')}>
          <MaterialCommunityIcons name="information-outline" size={24} color="#2f5e99" style={styles.icon} />
          <Text style={styles.preferenceText}>About</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  container: {
    flex: 1,
    paddingVertical : 16
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    marginBottom: 8,
  },
  sectionHeaderText: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  sectionSubText: {
    color: '#666',
    fontSize: 14,
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  preferenceText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 12,
  },
});

export default TermsCondition;
