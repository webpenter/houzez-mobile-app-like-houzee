import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filters from './newfilters';
import Selectcity from './selectcity';
import LocationCard from './losangls';

const MainFilters = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='filters' component={Filters} options={{ headerShown: false }} />
        <Stack.Screen name='selectcity' component={Selectcity} />
        <Stack.Screen name='losangls' component={LocationCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainFilters;

const styles = StyleSheet.create({});
