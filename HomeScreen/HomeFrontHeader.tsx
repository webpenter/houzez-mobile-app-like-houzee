import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homedrawer from './Homedrawer'
import HomeSearchBar from './HomeSearchBar'
import HomeDrawerKey from './HomeDrawerKey'
import RecentRearches from './RecentRearches'
import FeatureProperties from './FeatureProperties'
import LatestProperties from './LatestProperties'

const HomeFrontEnd = () => {
  return (
    <View style = {{backgroundColor : "white" , }}>
     <ScrollView>
       <Homedrawer/>
       <HomeSearchBar/>
       <HomeDrawerKey/>
       <RecentRearches/>
       <FeatureProperties/>
       <LatestProperties/>
     </ScrollView>
    </View>
  )
}

export default HomeFrontEnd;