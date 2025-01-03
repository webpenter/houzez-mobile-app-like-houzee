import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Filters from '@/components/searchtabbar/newfilters'

const Search = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer independent  = {true}>
        <Stack.Navigator>
            <Stack.Screen name='Filters' component={Filters}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Search

const styles = StyleSheet.create({})