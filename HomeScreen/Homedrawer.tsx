import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

const HomeDrawer = () => {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);

    const toggleDrawer = () => {
        setIsVisible(!isVisible);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.drawerItem} onPress={() => {
            setIsVisible(false);
            navigation.navigate(item.route);
        }}>
            <FontAwesome name={item.icon} size={20} color="black" />
            <Text style={styles.drawerText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const data = [
        { id: '1', icon: 'home', name: 'Home Carousel', route: 'Home22' },
        { id: '2', icon: 'home', name: 'Home Elegant', route: 'HomeDrawer' },
        { id: '3', icon: 'home', name: 'Home Location', route: 'HomeLocation' },
        { id: '4', icon: 'home', name: 'Home Tabbed', route: 'HomeTabbed' },
        { id: '5', icon: 'exclamation-circle', name: 'Blogs', route: 'Blogs' },
        { id: '6', icon: 'inbox', name: 'Add Property', route: 'Login' },
        { id: '7', icon: 'plus-circle', name: 'Quick Add Property', route: 'Login' },
        { id: '8', icon: 'building', name: 'Properties', route: 'Login' },
        // { id: '9', icon: 'user-tie', name: 'Agents', route: 'Agents' },
        { id: '10', icon: 'building-o', name: 'Agencies', route: 'Login' },
        { id: '11', icon: 'exclamation-circle', name: 'Properties Request', route: 'Login' },
        { id: '12', icon: 'heart', name: 'Favourite', route: 'Login' },
        { id: '13', icon: 'save', name: 'Saved Searches', route: 'Login' },
        { id: '14', icon: 'exclamation-circle', name: 'CRM Dashboard',},
        { id: '15', icon: 'cog', name: 'Settings', route: 'Settings & Privacy' },
        { id: '16', icon: 'address-book', name: 'Contact Us', route: 'Contact Us' },
        { id: '17', icon: 'sign-in', name: 'Login', route: 'Login' },
    ];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleDrawer} style={styles.header}>
                <Entypo name="menu" size={24} color="black" />
                <View style={styles.locationContainer}>
                    <Text style={styles.currentLocationText}>Current Location</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SelectLocation')}>
                        <View style={styles.locationDetails}>
                            <FontAwesome5 name="map-marker-alt" size={14} color="#2f5e99" />
                            <Text style={styles.locationText}>Please Select</Text>
                            <EvilIcons name="chevron-down" size={24} color="#2f5e99" />
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            <Modal
                isVisible={isVisible}
                onBackdropPress={toggleDrawer}
                style={styles.modal}
            >
                <View style={styles.drawer}>
                    <View style={styles.headerModal}>
                        <View style={styles.logoContainer}>
                            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                            <Text style={styles.logoText}>Houzi</Text>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default HomeDrawer;

const styles = StyleSheet.create({
    container: {
        marginTop: 44,
        marginLeft: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationContainer: {
        marginLeft: 10,
    },
    currentLocationText: {
        color: '#aaa',
        fontSize: 14,
    },
    locationDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontWeight: '600',
        fontSize: 14,
        marginLeft: 4,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    drawer: {
        backgroundColor: 'white',
        height: '100%',
        width: 250,
        padding: 20,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
    },
    drawerText: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "400",
    },
    headerModal: {
        backgroundColor: "#25ADDE",
        paddingBottom: 80,
        paddingLeft: 15,
        paddingTop: 15,
        marginBottom: 10,
        marginLeft: -20,
        marginTop: -20,
        marginRight: -20
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        height: 32,
        width: 32,
        borderRadius: 10,
    },
    logoText: {
        fontWeight: "600",
        fontSize: 26,
        marginLeft: 16,
        color: "white",
    },
});
