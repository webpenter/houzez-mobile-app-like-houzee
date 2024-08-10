import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Review = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reviews</Text>
      </View>
      <View style={styles.ratingRow}>
        <FontAwesome5 name="star" size={20} color="#FFD700" />
        <FontAwesome5 name="star" size={20} color="#FFD700" />
        <FontAwesome5 name="star" size={20} color="#FFD700" />
        <FontAwesome5 name="star" size={20} color="#FFD700" />
        <FontAwesome5 name="star" size={20} color="#FFD700" />
      </View>
      {[
        { title: "Testing", date: "24 days ago", author: "Jurry Abbas", text: "Testing" },
        { title: "I like it", date: "27 days ago", author: "Rashid Bukhari", text: "Is it available right now" },
        { title: "I like it", date: "2 months ago", author: "Zahid Khurshid", text: "It's available right now" },
      ].map((review, index) => (
        <View key={index} style={styles.reviewItem}>
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewTitle}>{review.title}</Text>
            <Text style={styles.reviewDate}>{review.date}</Text>
          </View>
          <View style={styles.ratingRow}>
            <FontAwesome5 name="star" size={14} color="#FFD700" />
            <FontAwesome5 name="star" size={14} color="#FFD700" />
            <FontAwesome5 name="star" size={14} color="#FFD700" />
            <FontAwesome5 name="star" size={14} color="#FFD700" />
            <FontAwesome5 name="star" size={14} color="#FFD700" />
            <Text style={styles.reviewAuthor}>{review.author}</Text>
          </View>
          <View style={styles.reviewContent}>
            <Text style={styles.reviewText}>{review.text}</Text>
          </View>
        </View>
      ))}
      <View style={styles.footer}>
        <Text style={styles.footerLink}>Write a review</Text>
       <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
       <Text style={styles.footerLink}>View all</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}

export default Review;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft : 8

  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  reviewItem: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewDate: {
    fontSize: 14,
    color: '#888',
  },
  reviewAuthor: {
    fontSize: 14,
    color: '#333',
    textAlign: 'right',
    marginLeft: 'auto',
  },
  reviewContent: {
    marginTop: 8,
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  footerLink: {
    color: '#2f5e99',
    fontWeight: 'bold',
  },
});
