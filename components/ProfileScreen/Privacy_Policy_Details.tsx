import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Privacy_Useful_Link from './Privacy_Useful_Link';

const Privacy_Policy_Details = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
            <View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Licensing</Text>
                    <Text style={styles.paragraph}>
                        If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                    </Text>
                    <Text style={styles.paragraph}>
                        Off-plan real estate refers to purchasing a property directly from the developer before it is completed. In essence, you’re buying a property that exists only on paper or as a blueprint. This approach is particularly common in new developments where developers offer units for sale long before construction is finished or even started.
                    </Text>
                    <Text style={styles.paragraph}>
                        Potential for Capital Appreciation: One of the main attractions of off-plan real estate is the potential for capital appreciation. If the market experiences growth during the construction period, the value of the property could increase before you even take ownership.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Information Collected With Social Logins</Text>
                    <Text style={styles.paragraph}>
                        When you use social login such as Facebook, Google, or Apple login, we collect some data about you as a user such as:
                    </Text>
                    <View style={styles.list}>
                        <Text style={styles.listItem}>• Your full name</Text>
                        <Text style={styles.listItem}>• Your email address</Text>
                        <Text style={styles.listItem}>• Your social profile ID</Text>
                        <Text style={styles.listItem}>• Your profile photo</Text>
                    </View>
                    <Text style={styles.paragraph}>
                        You can at any time delete this information about you on our website and mobile app.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Log Data</Text>
                    <Text style={styles.paragraph}>
                        Changes in Market Conditions: The real estate market is subject to fluctuations, and there’s always a risk that market conditions may change before the property is completed. A downturn could mean that the property’s value doesn’t appreciate as anticipated. It can also mean that construction materials hike in price, which may result in completion delays or a revised price for the units.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Easy Explaination</Text>
                    <Text style={styles.paragraph}>
                        If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

                        If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

                        When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.

                        If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}> Security</Text>
                    <Text style={styles.paragraph}>
                        You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}> Links to other Sites</Text>
                    <Text style={styles.paragraph}>
                        This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                        For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}> Childrens Privacy</Text>
                    <Text style={styles.paragraph}>
                        Children explore new ideas and new emotions. They want to keep some ideas or thoughts to themselves, which is quite natural. It can be thought of as a part of growing and becoming independent. To have a healthy bonding with the children, parents should respect and trust their private life. Privacy should not be thought of as hiding something from the parents; rather, it is a behavioral change one has as one grows up. It should not be a reason for concern for the parents.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}> Changes to This Privacy Policy</Text>
                    <Text style={styles.paragraph}>
                        When parents find that their child feels like staying alone, crying over something, or avoiding them, they have the right to invade their privacy. Though the child will not share everything with their parents, the parents should help their child cope with the condition that they might be facing.
                        Instead of spying on the kids, they can check the message chats of their children when they find changes in their child's behavior.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}> Contact Us</Text>
                    <Text style={styles.paragraph}>
                        If you have any questions or suggestions about our privacy p[olicy, do not hesitate to contact us at houzi@booleanBites.com.
                    </Text>
                </View>

                <View style={{ flexDirection: "row", paddingLeft: 18, gap: 6 }}>
                    <Pressable style={{ flexDirection: "row", gap: 8, backgroundColor: "#ccc", borderRadius: 100, paddingHorizontal: 16, paddingVertical: 8 }}>
                        <FontAwesome name='apple' color='white' size={16} />
                        <Text style={{ color: "white" }}>AppleStore</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: "row", gap: 8, backgroundColor: "green", borderRadius: 100, paddingHorizontal: 16, paddingVertical: 8 }}>
                        <FontAwesome5 name='google-play' color='white' size={16} />
                        <Text style={{ color: "white" }}>GooglePlay</Text>
                    </Pressable>
                </View>

                <View style={{ paddingLeft: 18 }}>
                    <Pressable style={{ flexDirection: "row", gap: 8, backgroundColor: "red", borderRadius: 100, paddingHorizontal: 16, paddingVertical: 8, width: 120, marginTop: 10 }}>
                        <FontAwesome name='buysellads' color='white' size={16} />
                        <Text style={{ color: "white" }}>Buy Now</Text>
                    </Pressable>
                </View>




            </View>
            <Privacy_Useful_Link />
        </ScrollView>
    );
}

export default Privacy_Policy_Details;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,

    },
    section: {
        borderRadius: 8,
        padding: 20,
        marginBottom: -20,

    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        color: '#2f5e99',
        marginBottom: 12,
    },
    paragraph: {
        fontSize: 14,
        color: '#333',
        marginBottom: 12,
    },
    list: {
        marginBottom: 12,
    },
    listItem: {
        fontSize: 14,
        lineHeight: 24,
        color: '#333',
        marginBottom: 6,
    },
});
