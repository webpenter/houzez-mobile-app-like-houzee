import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Searchtop from './searchtop';
import Searchtopp from './threebtn';
import Locity from './locity';
// import LocationCard from './losangls';
import Area from './areaselect';
import Propertytype from './propertytype';
import PriceRange from './priceRange';
import AreaRange from './AreaRange';
import Selectbed from './selectbed';

const Filters = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Searchtop />
        <Searchtopp />
        <Locity />
        {/* <LocationCard /> */}
        <Area />
        <Propertytype />
        <PriceRange/>
        <AreaRange/>
        <Selectbed/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
   
  },
});

export default Filters;
