import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SettingDemo from './SettingDemo'
import Setting_Item_Design from './Setting_Item_Design'
import SettingItemDesign02 from './Setting_Item_Design2'
import Preference_Dark_Mode from './Preference_Dark_mode'
import Terms_Condition from './Terms_Condition'

const Setting = () => {
  return (
   <ScrollView showsHorizontalScrollIndicator = {true}>
     <View>
      <View>
        <SettingDemo />
        <Setting_Item_Design/>
        <SettingItemDesign02/>
        <Preference_Dark_Mode/>
        <Terms_Condition/>
      </View>
    </View>
   </ScrollView>
  )
}

export default Setting

const styles = StyleSheet.create({})