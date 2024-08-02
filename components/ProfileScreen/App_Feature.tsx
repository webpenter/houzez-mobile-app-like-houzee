import { Image, StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// Get screen width for responsive design
const { width } = Dimensions.get('window');

const App_Feature = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>App Features</Text>
        <Text style={styles.description}>
          A perfect complement to your Houzez website, Houzi is a super flexible and powerful mobile app with top-notch features for real estate agents and companies.
        </Text>
      </View>
      {features.map((feature, index) => (
        <View key={index} style={styles.featureItem}>
          <View style={styles.imageContainer}>
            <Image source={feature.image} style={[styles.image, feature.imageStyle]} resizeMode="contain" />
          </View>
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
        </View>
      ))}
      <View style={styles.imageSection}>
        <Image source={require('../../assets/images/pshh01.png')} style={styles.fullWidthImage} resizeMode="contain" />
        <Text style={styles.sectionTitle}>Powerful search and filters</Text>
        <Text style={styles.sectionDescription}>
          Houzi comes with an advanced search system with features like geo-location-based radius search, city, area, and type-based searches. It also includes filter options for prices, area size, bedrooms, and bathrooms counts. Users can save searches and get alerts for criteria.
        </Text>
        <Image source={require('../../assets/images/pshh02.png')} style={styles.fullWidthImage} resizeMode="contain" />
        <Text style={styles.sectionTitle}>Listing Result Pages</Text>
        <Text style={styles.sectionDescription}>
          Houzi comes with multiple pre-designed gorgeous result items that you can choose to show in a list. Listings can be filtered with different parameters or reordered by pricing or dates. All listings can also be browsed on a map and carousel.
        </Text>
        <Image source={require('../../assets/images/pshh03.png')} style={styles.fullWidthImage} resizeMode="contain" />
        <Text style={styles.sectionTitle}>Property Detail Pages</Text>
        <Text style={styles.sectionDescription}>
          Information enriched, fully featured property details page contains every relevant modern details widget. A page that consists of a photo gallery, property features section, description, prices, agent or agency info, maps, ratings, and reviews. Customers can also schedule visits to the property along with an inquiry form for customers to reach out to your agents.
        </Text>
        <Image
          source={require('../../assets/images/pshh04.png')}
          style={[styles.fullWidthImage , {height:350,marginLeft:-150}]}
          resizeMode="contain"
        />
        <Text style={styles.sectionTitle}>Flexible and Powerful</Text>
        <Text style={styles.sectionDescription}>
          Houzi is a super flexible mobile app with top-notch features for real estate agents and companies, offering a slick design, multiple styling options, and highly customizable features.
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <FontAwesome name='apple' color='white' size={16} />
            <Text style={styles.buttonText}>Apple Store</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.googleButton]}>
            <FontAwesome5 name='google-play' color='white' size={16} />
            <Text style={styles.buttonText}>Google Play</Text>
          </Pressable>
        </View>
        <Pressable style={[styles.button, styles.buyNowButton]}>
          <FontAwesome name='buysellads' color='white' size={16} />
          <Text style={styles.buttonText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

const features = [
  {
    image: require('../../assets/images/psh01.svg'),
    title: 'Compatible with Houzez',
    description: 'Fully compatible and integrates with Houzez theme',
    imageStyle: {}
  },
  {
    image: require('../../assets/images/psh02.svg'),
    title: 'Advanced Search Options',
    description: 'Offers advanced search options to help users find their ideal property quickly',
    imageStyle: {}
  },
  {
    image: require('../../assets/images/psh03.svg'),
    title: 'Features Enrich',
    description: 'Powerful search, filter, maps, details, communications and all real estate features',
    imageStyle: { width: 50, marginLeft: 1 }
  },
  {
    image: require('../../assets/images/psh04.svg'),
    title: 'Free Updates',
    description: 'Don\'t worry about future costs, pay once and receive all future updates at no extra cost',
    imageStyle: { width: 42 }
  },
  {
    image: require('../../assets/images/psh05.svg'),
    title: 'Houzez CRM',
    description: 'Bundled with all features of Houzez CRM in your palm. Track activities, follow leads, reply to inquiries, and close deals.',
    imageStyle: { height: 34, marginBottom: 45, borderRadius: 4 }
  },
  {
    image: require('../../assets/images/psh06.svg'),
    title: 'Translation Ready',
    description: 'Fully RTL supported, Available in English, French, Spanish, Arabic, Russian, Turkish and many more...',
    imageStyle: {}
  }
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2f5e99',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    color: 'rgba(50, 44, 44, 1)',
    textAlign: 'center',
    paddingHorizontal: 10
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    width: 40,
    height: 40,
    marginRight: 18,
    marginBottom: 26,
    backgroundColor: '#aaa', 
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(50, 44, 44, 1)',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: '#aaa',
  },
  imageSection: {
    marginTop: 50,
  },
  fullWidthImage: {
    width: '100%',
    height: 200,
    aspectRatio: 1.77, 
    marginBottom: 36,
    marginTop:40
  },
  sectionTitle: {
    color: 'black',
    fontSize: 31,
    fontWeight: '600',
    marginBottom: 20,
    letterSpacing: 0.5
  },
  sectionDescription: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 20,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap:6
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '45%',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: 'green',
  },
  buyNowButton: {
    backgroundColor: 'red',
    marginTop: 10,
    width: '45%',
    // alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
  },
});

export default App_Feature;
