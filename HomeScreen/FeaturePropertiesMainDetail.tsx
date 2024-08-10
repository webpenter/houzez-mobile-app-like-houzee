import { ImageBackground, ScrollView, StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import FeatureDetailBedroom from './FeatureDetailBedroom';
import ListDetails from './ListDetails';
import FeatureAircon from './FeatureAircon';
import Mapview from './Mapview';
import FloorPlans from './FloorPlans';
import ContactInformation from './ContactInformation';
import Review from './Review';
import TwoCard from './Twocard';

const FeaturePropertiesMainDetail = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ImageBackground
          source={require('../assets/images/card13.jpg')}
          style={styles.imageBackground}
        >
          <View style={styles.headerContainer}>
           <Pressable onPress={() => navigation.goBack()}>
           <View style={styles.iconContainer}>
              <AntDesign name="arrowleft" size={20} color="black" />
            </View>
           </Pressable>
            <View style={styles.actionsContainer}>
              <View style={styles.iconContainer}>
                <Feather name="heart" size={20} color="black" />
              </View>
              <View style={styles.iconContainer}>
                <AntDesign name="sharealt" size={20} color="black" />
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome6 name="mobile-retro" size={20} color="black" />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Gorgeous villa</Text>
          <View style={styles.statusContainer}>
            <Pressable style={styles.statusButton}>
              <Text style={styles.statusText}>Featured</Text>
            </Pressable>
            <Pressable style={[styles.statusButton , { borderColor : "#e0e0e0"}]}>
              <Text style={styles.statusText}>For Rent</Text>
            </Pressable>
          </View>
          <Text style={styles.price}>$25,000/mo</Text>
        </View>
           <View>
           <FeatureDetailBedroom/>
           <ListDetails/>
            <FeatureAircon/>
            <Mapview/>
            <FloorPlans/>
            <ContactInformation/>
            <Review/>
            <TwoCard/>
           </View>
      </ScrollView>
    </View>
  );
};

export default FeaturePropertiesMainDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "white",
    // marginTop : 28
  },
  scrollView: {
    flexGrow: 1,
  },
  imageBackground: {
    width: '100%',
    height: 280,
    justifyContent: 'flex-end',
  },
  headerContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop : 12
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    letterSpacing : .7,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
   
  },
  statusButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderColor : "#2f5e99",
    borderWidth : .5
  },
  statusText: {
    fontSize: 11,
    color: '#333',
    fontWeight : "500"
  },
  price: {
    fontSize: 19,
    fontWeight: '500',
    color: '#000',
  },
});
