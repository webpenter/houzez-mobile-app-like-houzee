import { ImageBackground, ScrollView, StyleSheet, View, Text, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const FloorPlanLoading = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 10 * 60 * 1000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </View>
                </Pressable>
                <View style={styles.actionsContainer}>
                    <View style={styles.iconContainer}>
                        <Feather name="download" size={20} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.spinnerContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <Text>Loading Complete</Text> 
                )}
            </View>
        </View>
    );
};

export default FloorPlanLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 25,
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
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
