import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RangeSlider from 'rn-range-slider';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import LocationCard from './losangls';


const Thumb = () => <View style={styles.thumb} />;
const Rail = () => <View style={styles.rail} />;
const RailSelected = () => <View style={styles.railSelected} />;
const Label = ({ text }) => <Text style={styles.label}>{text}</Text>;
const Notch = () => <View style={styles.notch} />;

const Locity = () => {
  const [activeButton, setActiveButton] = useState('City');
  const [distance, setDistance] = useState(100); 

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setDistance(low);
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'City' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('City')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'City' && styles.activeButtonText,
            ]}
          >
            City
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'Location' && styles.activeButton,
          ]}
          onPress={() => setActiveButton('Location')}
        >
          <Text
            style={[
              styles.buttonText,
              activeButton === 'Location' && styles.activeButtonText,
            ]}
          >
            Location
          </Text>
        </TouchableOpacity>
      </View>

      {activeButton === 'City' && (
        <View>
          <LocationCard />
        </View>
      )}

      {activeButton === 'Location' && (
        <View style={styles.locationLayout}>
          <View style={styles.locationHeader}>
            <Feather name="map-pin" size={24} color="black" style={styles.icon} />
            <Text style={styles.locationText}>Location</Text>
          </View>
          <View style={styles.selectContainer}>
            <MaterialCommunityIcons name="crosshairs-gps" size={24} color="#004768" style={styles.locationIcon} />
            <TouchableOpacity style={styles.selectTouchable}>
              <Text style={styles.selectText}>Please select</Text>
              <FontAwesome name="angle-right" size={24} color="black" style={styles.angleIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.radiusText}>Radius {distance} km</Text>
          <View style={styles.distanceContainer}>
            <RangeSlider
              style={styles.slider}
              min={0}
              max={100}
              step={1}
              low={100} // Set initial low value to 100
              floatingLabel
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleValueChange}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    marginLeft: '5%',
  },
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
    width: 250,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#c5c5c5',
    paddingVertical: 5,
    paddingHorizontal: 43,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 0,
  },
  activeButton: {
    backgroundColor: '#004768',
  },
  buttonText: {
    color: 'black',
  },
  activeButtonText: {
    color: '#00AFFF',
  },
  cityLayout: {
    marginTop: 20,
    alignItems: 'center',
  },
  locationLayout: {
    marginTop: 20,
    alignItems: 'center',
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  icon: {
    marginRight: 12,
    color: '#004768',
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 10,
  },
  selectTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  selectText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 13,
    color: 'black',
  },
  angleIcon: {
    marginLeft: 8,
    color: '#004768',
  },
  radiusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  distanceContainer: {
    alignItems: 'center',
    width: '100%',
  },
  distanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
    marginLeft: 20
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#004768', 
  },
  rail: {
    flex: 1,
    height: 7,
    borderRadius: 2,
    backgroundColor: '#004768'
  },
  railSelected: {
    height: 4,
    backgroundColor: '#00AFFF', 
    borderRadius: 2,
  },
  notch: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#004768', 
    position: 'absolute',
    top: -4,
  },
  label: {
    position: 'absolute',
    top: -25,
    fontSize: 12,
    color: 'black',
  },
});

export default Locity;
