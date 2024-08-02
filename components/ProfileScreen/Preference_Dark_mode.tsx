import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PreferenceDarkMode = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
     <View>
     <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Preference</Text>
            <Text style={styles.sectionSubText}>Customize your experience on Houzi</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.preferenceItem} onPress={()=>navigation.navigate('Dark Mode Settings')}>
          <MaterialIcons name="dark-mode" size={24} color="#2f5e99" style={styles.icon} />
          <Text style={styles.preferenceText}>Dark Mode</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.preferenceItem} onPress={()=>navigation.navigate('Language')}>
          <Ionicons name="language-sharp" size={24} color="#2f5e99" style={styles.icon} />
          <Text style={styles.preferenceText}>Language</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
     </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 12,
  },
  sectionHeader: {
    marginBottom: 8,
  },
  sectionHeaderText: {
    fontSize: 18,
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
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default PreferenceDarkMode;
