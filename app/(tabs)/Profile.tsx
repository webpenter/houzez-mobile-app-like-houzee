import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profiletop from '@/components/ProfileScreen/Profiletop';
import ContactUs from '@/components/ProfileScreen/ContactUs';
import Loginform from './Saved';
import ProfileLogin from '@/components/ProfileScreen/ProfileLogin';
import Setting from '@/components/ProfileScreen/Setting';
import About from '@/components/ProfileScreen/About';
import Privacy_Policy from '@/components/ProfileScreen/Privacy_Policy';
import Dark_Mode_Settings from '@/components/ProfileScreen/Dark_Mode_Settings';
import Terms_Condition_Details from '@/components/ProfileScreen/Terms_Condition_Details';
import Setting_Privacy_Menu_Details from '../../components/ProfileScreen/Setting_Privacy Menu_Details';
import Language from '@/components/ProfileScreen/Language';
import LanguageScreen from '@/components/ProfileScreen/Language';

const index = () => {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer independent={true}>
     <StatusBar backgroundColor="#2f5e99" barStyle="light-content" />
    <Stack.Navigator>
      <Stack.Screen name='User Profile' component={Profiletop}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}
      />
        <Stack.Screen name='Contact Us' component={ContactUs}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
      />
       <Stack.Screen name='Login' component={ProfileLogin}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown:false
      }}
      />
       <Stack.Screen name='Settings & Privacy' component={Setting}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
       
      }}
      />
        <Stack.Screen name='About' component={About}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
       
      }}
      />
        <Stack.Screen name='Privacy Policy' component={Privacy_Policy}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
       
      }}
      />
       <Stack.Screen name='Dark Mode Settings' component={Dark_Mode_Settings}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
       
      }}
      />
       <Stack.Screen name='Terms and Condition' component={Terms_Condition_Details}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
       
      }}
      />
        <Stack.Screen name='Privacy Policy ' component={Setting_Privacy_Menu_Details}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
       
      }}
      />
      <Stack.Screen name='Language' component={LanguageScreen}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
       
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default index
