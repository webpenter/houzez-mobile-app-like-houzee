import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../LoginScreen/Login';
import SignScreen from '../LoginScreen/Sign_Up';
import Forgot_Password from '../LoginScreen/Forgot_Password';


const ProfileLogin = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer independent = {true}>
      <StatusBar backgroundColor="#2f5e99" barStyle="light-content" />
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerStyle: { backgroundColor: '#2f5e99' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name='Sign Up'
          component={SignScreen}
          options={{
            headerStyle: { backgroundColor: '#2f5e99' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
        <Stack.Screen
          name='Forgot Password'
          component={Forgot_Password}
          options={{
            headerStyle: { backgroundColor: '#2f5e99' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProfileLogin;
