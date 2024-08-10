import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const FeatureProperties = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
       <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Featured Properties</Text>
       <TouchableOpacity onPress={ () => navigation.navigate('SearchAllPages')}>
       <View style={styles.headerRight}>
          <Text style={styles.seeAllText}>See All</Text>
          <FontAwesome name='chevron-right' color='#2f5e99' size={10} />
        </View>
        </TouchableOpacity>
      </View>
    <ScrollView showsHorizontalScrollIndicator={false}  horizontal = {true}>
     
      {/* 01 */}
      <View style = {{flexDirection : "row" , gap : 8}}>
     <TouchableOpacity onPress={()=>navigation.navigate('Feature Properties')}>
     <View style={styles.cardContainer}>
        <Image
          source={require('../assets/images/card13.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Modern Office</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Featured</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>For Rent</Text>
            </View>
          </View>
          <View style={[styles.infoContainer , {marginLeft : -6}]}>
            <EvilIcons name='location' size={24} color='#2f5e99' />
            <Text style={styles.infoText}>2208 Southwest Dr. Los</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
            <Text style={styles.infoText}>1900 Sq Ft</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Office</Text>
            <Text style={styles.priceText}>$1.9k</Text>
          </View>
        </View>
      </View>
     </TouchableOpacity>
     {/*  */}
     <TouchableOpacity onPress={()=>navigation.navigate('Comfortable')}>
     <View style={styles.cardContainer}>
        <Image
          source={require('../assets/images/card11.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Comfortable</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Featured</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>For Rent</Text>
            </View>
          </View>
          <View style={[styles.infoContainer , {marginLeft : -6}]}>
            <EvilIcons name='location' size={24} color='#2f5e99' />
            <Text style={styles.infoText}>2208 Southwest Dr. Los</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
            <Text style={styles.infoText}>1900 Sq Ft</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Office</Text>
            <Text style={styles.priceText}>$21k</Text>
          </View>
        </View>
      </View>
     </TouchableOpacity>
     {/*  */}
     <TouchableOpacity onPress={()=>navigation.navigate('Relaxing')}>
     <View style={styles.cardContainer}>
        <Image
          source={require('../assets/images/card05.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Relaxing</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Featured</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>For Rent</Text>
            </View>
          </View>
          <View style={[styles.infoContainer , {marginLeft : -6}]}>
            <EvilIcons name='location' size={24} color='#2f5e99' />
            <Text style={styles.infoText}>2208 Southwest Dr. Los</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
            <Text style={styles.infoText}>1900 Sq Ft</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Office</Text>
            <Text style={styles.priceText}>$4.2k</Text>
          </View>
        </View>
      </View>
     </TouchableOpacity>
     {/*  */}
     <TouchableOpacity onPress={()=>navigation.navigate('Design apartment')}>
     <View style={styles.cardContainer}>
        <Image
          source={require('../assets/images/card03.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Design Apartment</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Featured</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>For Rent</Text>
            </View>
          </View>
          <View style={[styles.infoContainer , {marginLeft : -6}]}>
            <EvilIcons name='location' size={24} color='#2f5e99' />
            <Text style={styles.infoText}>2208 Southwest Dr. Los</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
            <Text style={styles.infoText}>1900 Sq Ft</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Office</Text>
            <Text style={styles.priceText}>$1.9k</Text>
          </View>
        </View>
      </View>
     </TouchableOpacity>
     {/*  */}
     <TouchableOpacity onPress={()=>navigation.navigate('Ample studio')}>
     <View style={styles.cardContainer}>
        <Image
          source={require('../assets/images/card08.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Ample Studio at</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Featured</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>For Rent</Text>
            </View>
          </View>
          <View style={[styles.infoContainer , {marginLeft : -6}]}>
            <EvilIcons name='location' size={24} color='#2f5e99' />
            <Text style={styles.infoText}>2208 Southwest Dr. Los</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
            <Text style={styles.infoText}>1900 Sq Ft</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Office</Text>
            <Text style={styles.priceText}>$1.9k</Text>
          </View>
        </View>
      </View>
     </TouchableOpacity>
     {/*  */}
     <TouchableOpacity onPress={()=>navigation.navigate('Feature Properties')}>
     <View style={styles.cardContainer}>
        <Image
          source={require('../assets/images/card09.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Modern Office</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Featured</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>For Rent</Text>
            </View>
          </View>
          <View style={[styles.infoContainer , {marginLeft : -6}]}>
            <EvilIcons name='location' size={24} color='#2f5e99' />
            <Text style={styles.infoText}>2208 Southwest Dr. Los</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
            <Text style={styles.infoText}>1900 Sq Ft</Text>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Office</Text>
            <Text style={styles.priceText}>$1.9k</Text>
          </View>
        </View>
      </View>
     </TouchableOpacity>
     </View>
    </ScrollView>
    </View>
  );
};

export default FeatureProperties;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 26,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    textAlign: 'right',
    color: '#2f5e99',
    fontSize: 16,
    marginRight: 6,
  },
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#aaa',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    marginBottom: 20,
  },
  cardImage: {
    width: 120,
    height: 126,
    borderRadius: 8,
  },
  cardContent: {
    marginLeft: 20,
    flex: 1,
    paddingVertical: 8,
    marginTop:-8
  },
  cardTitle: {
    fontWeight: '800',
    letterSpacing: 0.2,
    fontSize: 16,
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tag: {
    borderColor: '#2f5e99',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#dfdfdf',
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginRight: 4,
  },
  tagText: {
    fontSize: 12,
   
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoText: {
    marginLeft: 4,
    fontSize: 15,
    fontWeight : "400"
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal : 6
  },
  footerText: {
    color: '#2f5e99',
    fontSize: 14,
    fontWeight : "600"
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
    marginRight : 10
  },
});
