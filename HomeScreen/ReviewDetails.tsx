import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ReviewDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/Hamza.jpg')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Hamza Riaz</Text>
              <Text style={styles.timestamp}>24 days ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>Testing</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
        {/* 02 */}
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/Rashid.jpeg')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Rashid Bukhari</Text>
              <Text style={styles.timestamp}>27 days ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>I like it</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/shahbaz.jpeg')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Shahbaz Chandio</Text>
              <Text style={styles.timestamp}>24 days ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>Testing</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/rana.png')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Zahid hurshid</Text>
              <Text style={styles.timestamp}>2 months ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>Available right now</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/Hamza.jpg')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Shahbaz Chandio</Text>
              <Text style={styles.timestamp}>2 days ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>Testing</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/Hamza.jpg')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Umir Zafar</Text>
              <Text style={styles.timestamp}>24 days ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>Testing</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/Hamza.jpg')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Bilal Riaz</Text>
              <Text style={styles.timestamp}>24 days ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>Testing</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/Hamza.jpg')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Rana Abdul Khaliq</Text>
              <Text style={styles.timestamp}>7 days ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>Testing</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/Hamza.jpg')} 
              style={styles.profileImage} 
            />
            <View style={styles.headerTextContainer}>
              <Text style={styles.username}>Salman Siddique</Text>
              <Text style={styles.timestamp}>1 days ago</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={16} color="#2f5e99" style={styles.menuIcon} />
          </View>
          <Text style={styles.reviewText}>Beautiful look</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <AntDesign name="star" size={16} color="yellow" />
            <FontAwesome name="star-half-full" size={16} color="yellow" />
            <AntDesign name="staro" size={16} color="yellow" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ReviewDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  reviewContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
  menuIcon: {
    marginLeft: 'auto',
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});
