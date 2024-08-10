import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FeatureAircon = () => {
    const [showFullDescription, setShowFullDescription] = useState(false);
const navigation = useNavigation();
    const handleReadMore = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Featured</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Features')}>
                    <Text style={styles.showMoreText}>Show More</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.iconWrapper}>
                    <FontAwesome5 name="fan" size={20} color="#2f5e99" />
                </View>
                <View style={styles.iconWrapper}>
                    <MaterialIcons name="sports-gymnastics" size={20} color="#2f5e99" />
                </View>
                <View style={styles.iconWrapper}>
                    <FontAwesome5 name="swimmer" size={20} color="#2f5e99" />
                </View>
                <View style={styles.iconWrapper}>
                    <FontAwesome name="tv" size={20} color="#2f5e99" />
                </View>
                <View style={styles.iconWrapper}>
                    <AntDesign name="wifi" size={20} color="#2f5e99" />
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.descriptionHeader}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <TouchableOpacity onPress={handleReadMore}>
                        <Text style={styles.readMoreText}>{showFullDescription ? "Read Less" : "Read More"}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.descriptionText}>
                    Real estate development, or property development, includes activities that range from renovating existing buildings to the purchase of raw land and the sale of developed land or parcels to others. Real estate is commonly purchased with cash or financed with a mortgage through a private or commercial lender.
                </Text>
                {showFullDescription && (
                    <Text style={styles.descriptionText}>
                        {"\n"}The terms land, real estate, and real property are often used interchangeably, but there are distinctions.
                        {"\n\n"}Land refers to the earth's surface down to the center of the earth and upward to the airspace above, including the trees, minerals, and water. The physical characteristics of land include its immobility, indestructibility, and uniqueness, where each parcel of land differs geographically.
                        {"\n\n"}Real estate encompasses the land, plus any permanent man-made additions, such as houses and other buildings. Any additions or changes to the land that affects the property's value are called an improvement.
                        {"\n\n"}Once land is improved, the total capital and labor used to build the improvement represent a sizable fixed investment. Though a building can be razed, improvements like drainage, electricity, water and sewer systems tend to be permanent.
                        {"\n\n"}Real property includes the land and additions to the land plus the rights inherent to its ownership and usage.
                    </Text>
                )}
            </View>
        </View>
    );
}

export default FeatureAircon;

const styles = StyleSheet.create({
    container: {
        margin: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2f5e99',
    },
    showMoreText: {
        color: '#2f5e99',
        textAlign: 'right',
        fontWeight: "600",
        fontSize: 14
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    iconWrapper: {
        backgroundColor: '#e8f0fe',
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    descriptionContainer: {
        marginTop: 16,
    },
    descriptionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    descriptionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2f5e99',
    },
    readMoreText: {
        color: '#2f5e99',
        fontWeight: '600',
        fontSize: 14,
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
        marginTop : 16
    },
});
