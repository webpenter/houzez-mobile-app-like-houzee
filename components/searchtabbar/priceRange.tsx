import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const Thumb = () => <View style={styles.thumb} />;
const Rail = () => <View style={styles.rail} />;
const RailSelected = () => <View style={styles.railSelected} />;
const Label = ({ text }) => <Text style={styles.label}>{text}</Text>;
const Notch = () => <View style={styles.notch} />;

const PriceRange = () => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100000);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Foundation name="price-tag" size={24} color="black" style={styles.priceTagIcon} />
          <Text style={styles.labelText}>Price range</Text>
          <Text style={styles.currency}>$</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            value={String(low)}
            onChangeText={text => setLow(Number(text))}
          />
          <Text style={styles.toText}>TO</Text>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            value={String(high)}
            onChangeText={text => setHigh(Number(text))}
          />
        </View>
      </View>
      <RangeSlider
        style={styles.slider}
        min={0}
        max={100000}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <View style={styles.borderLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 20,
  },
  container: {
    marginTop: 12,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconAndLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTagIcon: {
    marginRight: 9, 
    color: '#004768',
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8, 
    color:'gray'
  },
  currency: {
    fontSize: 18,
    marginLeft:150
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 100,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16,
  },
  toText: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  slider: {
    height: 40,
    marginTop: 20,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#004768',
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
  },
  railSelected: {
    height: 4,
    backgroundColor: '#004768',
    borderRadius: 2,
  },
  notch: {
    width: 10,
    height: 10,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#004768',
  },
  label: {
    position: 'absolute',
    top: -25,
    fontSize: 12,
    color: 'black',
  },
  borderLine: {
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    width:365,
    marginLeft:-20
  },
});

export default PriceRange;
