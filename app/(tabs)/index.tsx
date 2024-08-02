import { StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeFrontEnd from '@/HomeScreen/HomeFrontHeader';
import HomeDrawerCarousel from '@/HomeScreen/HomeDrawerCarousel';
import Login from '@/components/LoginScreen/Login';
import SelectLocation from '@/HomeScreen/SelectLocation';
import NavigationKeyAllPages from '@/HomeScreen/NavigationKeyAllPages';
import FeaturePropertiesMainDetail from '@/HomeScreen/FeaturePropertiesMainDetail';

const Index = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer independent={true}>
      <StatusBar backgroundColor="#25ADDE" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeFrontEnd}
          options={{
            headerStyle: { 
              backgroundColor: '#2f5e99',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Select Location'
          component={SelectLocation}
          options={{
            headerStyle: { 
              backgroundColor: '#25ADDE',
              borderBottomWidth: 0, 
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='SearchAllPages'
          component={NavigationKeyAllPages}
          options={{
            headerStyle: { 
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown : false
          }}
        />
          <Stack.Screen
          name='Feature Properties'
          component={FeaturePropertiesMainDetail}
          options={{
            headerStyle: { 
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown : false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;

const styles = StyleSheet.create({});
