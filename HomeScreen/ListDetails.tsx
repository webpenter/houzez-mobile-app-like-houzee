import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const ListDetails = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.detailsText}>Details</Text>
        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text style={styles.moreDetailsText}>
            {showMore ? 'Less Details' : 'More Details'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Created Date</Text>
          <Text style={styles.detailValue}>March 7, 2024</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Last Updated</Text>
          <Text style={styles.detailValue}>March 7, 2024</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Property ID</Text>
          <Text style={styles.detailValue}>416</Text>
        </View>
        {showMore && (
          <>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Price</Text>
              <Text style={styles.detailValue}>$1,900/mo</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Property Type</Text>
              <Text style={styles.detailValue}>Office</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Property Status</Text>
              <Text style={styles.detailValue}>For Rent</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Property unique id</Text>
              <Text style={styles.detailValue}>HZ41</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Property Size</Text>
              <Text style={styles.detailValue}>1900</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Year Built</Text>
              <Text style={styles.detailValue}>2024</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

export default ListDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailsText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#555',
  },
  moreDetailsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2f5e99',
  },
  detailsContainer: {
    borderRadius: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 12,
  },
  detailLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: '#555',
  },
  detailValue: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
});
