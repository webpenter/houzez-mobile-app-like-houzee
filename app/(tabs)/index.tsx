import { StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeFrontEnd from '@/HomeScreen/HomeFrontHeader';
import SelectLocation from '@/HomeScreen/SelectLocation';
import NavigationKeyAllPages from '@/HomeScreen/NavigationKeyAllPages';
import FeaturePropertiesMainDetail from '@/HomeScreen/FeaturePropertiesMainDetail';
import Features from '@/HomeScreen/FeatureAirconDetails';
import CompleteMap from '@/HomeScreen/CompleteMap';
import FloorPlanLoading from '@/HomeScreen/FloorPlanLoading';
import EnquireInformation from '@/HomeScreen/EnquireInformation';
import Shudole from '@/HomeScreen/Shudole';
import WatchVideo from '@/HomeScreen/WatchVideo';
import ReviewDetails from '@/HomeScreen/ReviewDetails';
import DesignPlace from '@/LatestNavigationDetials/DesignPlace';
import Comfortable from '@/LatestNavigationDetials/Comfortable';
import DesignApartment from '@/LatestNavigationDetials/DesignApartment';
import Relaxing from '@/LatestNavigationDetials/Relaxing';
import AmpleStudio from '@/LatestNavigationDetials/AmpleStudioAT';
import Renoveted from '@/LatestNavigationDetials/RenovetedStudio';
import Specials_2 from '@/LatestNavigationDetials/Specials_2';
import Luxurious from '@/LatestNavigationDetials/Luxurious';
import AwesomeStudio from '@/LatestNavigationDetials/AwesomeStudio';
import ModernApartment from '@/LatestNavigationDetials/ModernApartment';
import ContactUs from '@/components/ProfileScreen/ContactUs';
import Setting from '@/components/ProfileScreen/Setting';
import ProfileLogin from '@/components/ProfileScreen/ProfileLogin';

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
            headerShown: false
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
          }}
        />
        <Stack.Screen
          name='Features'
          component={Features}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />

        <Stack.Screen
          name='Map'
          component={CompleteMap}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name='Floor Loading'
          component={FloorPlanLoading}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Enquire Information'
          component={EnquireInformation}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name='Schedule A Tour'
          component={Shudole}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name='Watch A Video'
          component={WatchVideo}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name='Reviews'
          component={ReviewDetails}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name='Design place'
          component={DesignPlace}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Comfortable'
          component={Comfortable}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Design apartment'
          component={DesignApartment}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Relaxing'
          component={Relaxing}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Ample studio'
          component={AmpleStudio}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Renoveted studio'
          component={Renoveted}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Specious 2-Bed'
          component={Specials_2}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Luxurious modern'
          component={Luxurious}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Awesome studio'
          component={AwesomeStudio}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
         <Stack.Screen
          name='Modern apartment'
          component={ModernApartment}
          options={{
            headerStyle: {
              backgroundColor: '#25ADDE',

            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen name='Contact Us' component={ContactUs}
       options={{
        headerStyle: { backgroundColor: '#2f5e99' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
      />
       <Stack.Screen name='Settings & Privacy' component={Setting}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;