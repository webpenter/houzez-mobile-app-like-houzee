import { Pressable, StyleSheet, Text, View, Linking } from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const PrivacyUsefulLink = () => {
    const openLink = (url) => {
        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Houzi</Text>

            <Text style={styles.descriptionText}>
                A perfect complement to your Houzez Wordpress websites, Houzi is a perfect flexible and powerful mobile app with top-notch features for real agents and companies. For more info you can reach the team at
            </Text>

            <View style={styles.emailContainer}>
                <Text style={styles.boldText}>Email:</Text>
                <Pressable onPress={() => openLink('mailto:houzi@booleanBites.com')}>
                    <Text style={styles.emailText}> houzi@booleanBites.com</Text>
                </Pressable>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, styles.appleButton]} onPress={() => openLink('https://www.apple.com/app-store/')}>
                    <FontAwesome name='apple' color='white' size={16} />
                    <Text style={styles.buttonText}>AppleStore</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.googleButton]} onPress={() => openLink('https://play.google.com/store')}>
                    <FontAwesome5 name='google-play' color='white' size={16} />
                    <Text style={styles.buttonText}>GooglePlay</Text>
                </Pressable>
            </View>

            <View style={styles.linksContainer}>
                <Text style={styles.linksHeader}>Useful Links</Text>
                {["Home", "Documentation", "Terms of Service", "Privacy Policy", "Houzi Android", "Houzi iOS"].map((link, index) => (
                    <View key={index} style={styles.linkItem}>
                        <FontAwesome name='chevron-right' color='#ccc' size={10} />
                        <Text style={styles.linkText}>{link}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.socialContainer}>
                <Text style={styles.socialHeader}>Our Social Networks</Text>
                <Text style={styles.socialText}>
                    Follow us on social media to keep in touch and updated with the progress we're making in developing this product:
                </Text>
                <View style={styles.socialIcons}>
                    <Pressable style={styles.socialIcon} onPress={() => openLink('https://www.android.com/')}>
                        <FontAwesome name='android' color='white' size={18} />
                    </Pressable>
                    <Pressable style={styles.socialIcon} onPress={() => openLink('https://www.apple.com/')}>
                        <FontAwesome name='apple' color='white' size={18} />
                    </Pressable>
                    <Pressable style={styles.socialIcon} onPress={() => openLink('https://twitter.com/')}>
                        <FontAwesome name='twitter' color='white' size={18} />
                    </Pressable>
                    <Pressable style={styles.socialIcon} onPress={() => openLink('https://facebook.com/')}>
                        <FontAwesome name='facebook' color='white' size={18} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.footerDescription}>© Copyright 2021 @booleanBites Ltd. Pakistan. All Rights Reserved</Text>
            </View>
        </View>
    );
};

export default PrivacyUsefulLink;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 20,
        // marginBottom: -20,
        backgroundColor: 'white',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    descriptionText: {
        marginVertical: 10,
        fontSize: 14,
        lineHeight: 20,
    },
    boldText: {
        fontWeight: '700',
    },
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    emailText: {
        marginLeft: 5,
        color: '#2f5e99',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 6,
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',
        gap: 8,
        borderRadius: 100,
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
    },
    appleButton: {
        backgroundColor: '#ccc',
    },
    googleButton: {
        backgroundColor: 'green',
    },
    buttonText: {
        color: 'white',
    },
    linksContainer: {
        marginTop: 30,
    },
    linksHeader: {
        fontWeight: '600',
        fontSize: 16,
        marginBottom: 10,
    },
    linkItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    linkText: {
        fontSize: 14,
        letterSpacing: 0.5,
        marginLeft: 8,
    },
    socialContainer: {
        marginTop: 20,
    },
    socialHeader: {
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 5,
    },
    socialText: {
        marginBottom: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
    },
    socialIcon: {
        backgroundColor: '#2f5e99',
        borderRadius: 100,
        // padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height : 36,
        width : 36
     
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        paddingVertical: 20,
    },
    footerDescription: {
        fontSize: 15,
        textAlign: 'center',
        color: '#555',
    },
});
