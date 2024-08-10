import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const LatestProperties = () => {
    
    const navigation = useNavigation();
    return (
        <ScrollView  style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Latest Properties in New York</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SearchAllPages')}>
                    <View style={styles.headerRight}>
                        <Text style={styles.seeAllText}>See All</Text>
                        <FontAwesome name='chevron-right' color='#2f5e99' size={10} />
                    </View>
                </TouchableOpacity>
            </View>
         <View>
               {/* 01 */}
               <TouchableOpacity onPress={() => navigation.navigate('Design place')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card01.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Design place</Text>
                        <View style={styles.tagContainer}>
                            {/* <View style={styles.tag}>
              <Text style={styles.tagText}>Featured</Text>
            </View> */}
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Sackett St, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 5   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 3    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>1900 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>STUDIO</Text>
                            <Text style={styles.priceText}>$1.9k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 02 */}
            <TouchableOpacity  onPress={() => navigation.navigate('Comfortable')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card02.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Comfortable</Text>
                        <View style={styles.tagContainer}>
                            {/* <View style={styles.tag}>
              <Text style={styles.tagText}>Featured</Text>
            </View> */}
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Sale</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Fultan St, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 4   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 2    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>4300 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>APARTMENT</Text>
                            <Text style={styles.priceText}>$1.6k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 03 */}
            <TouchableOpacity  onPress={() => navigation.navigate('Design apartment')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card03.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Design apartment</Text>
                        <View style={styles.tagContainer}>
                            <View style={styles.tag}>
                <Text style={styles.tagText}>Featured</Text>
              </View>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Quincy St, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 3   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 2    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>2560 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>APARTMENT</Text>
                            <Text style={styles.priceText}>$876k</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 04 */}
            <TouchableOpacity  onPress={() => navigation.navigate('Relaxing')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card04.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Relaxing</Text>
                        <View style={styles.tagContainer}>
                            {/* <View style={styles.tag}>
                <Text style={styles.tagText}>Featured</Text>
              </View> */}
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Marcy Ave, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 3   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 2    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>1900 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>STUDIO</Text>
                            <Text style={styles.priceText}>$2.1k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 05 */}
            <TouchableOpacity onPress={() => navigation.navigate('Ample studio')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card05.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Ample studio at</Text>
                        <View style={styles.tagContainer}>
                            {/* <View style={styles.tag}>
                <Text style={styles.tagText}>Featured</Text>
              </View> */}
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Metro Plaza, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 4   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 2    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>1200 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>STUDIO</Text>
                            <Text style={styles.priceText}>$540k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 06 */}
            <TouchableOpacity onPress={() => navigation.navigate('Comfortable')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card06.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Comfortable</Text>
                        <View style={styles.tagContainer}>
                            {/* <View style={styles.tag}>
                <Text style={styles.tagText}>Featured</Text>
              </View> */}
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Nussau St, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 1   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 2    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>1900 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>STUDIO</Text>
                            <Text style={styles.priceText}>$3.7k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 07 */}
            <TouchableOpacity onPress={() => navigation.navigate('Renoveted studio')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card12.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Renovated studio</Text>
                        <View style={styles.tagContainer}>
                            <View style={styles.tag}>
                <Text style={styles.tagText}>Featured</Text>
              </View>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}> 194 mercer, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 4   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 2    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>1900 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>APARTMENT</Text>
                            <Text style={styles.priceText}>$1.9k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 08 */}
            <TouchableOpacity onPress={() => navigation.navigate('Specious 2-Bed')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card05.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Specious 2-Bed</Text>
                        <View style={styles.tagContainer}>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>Featured</Text>
                            </View>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Sackett St, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 5   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 3    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>3560 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>RESIDENTIAL</Text>
                            <Text style={styles.priceText}>$3.4k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 09 */}
            <TouchableOpacity onPress={() => navigation.navigate('Design place')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card08.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Design place</Text>
                        <View style={styles.tagContainer}>
                            {/* <View style={styles.tag}>
          <Text style={styles.tagText}>Featured</Text>
        </View> */}
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Sackett St, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 5   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 3    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>1900 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>STUDIO</Text>
                            <Text style={styles.priceText}>$1.9k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 10 */}
            <TouchableOpacity onPress={() => navigation.navigate('Luxurious modern')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card09.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Luxurious Modern</Text>
                        <View style={styles.tagContainer}>
                            <View style={styles.tag}>
                <Text style={styles.tagText}>Featured</Text>
              </View>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>Maimi Floria</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 3   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 5    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>1900 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>VILLA</Text>
                            <Text style={styles.priceText}>$1.9k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 11 */}
            <TouchableOpacity onPress={() => navigation.navigate('Awesome studio')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card10.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Awesome studio</Text>
                        <View style={styles.tagContainer}>
                            {/* <View style={styles.tag}>
                                <Text style={styles.tagText}>Featured</Text>
                            </View> */}
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Rent</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>1308 E 49th St</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 4   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 2    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>4370 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>STUDIO</Text>
                            <Text style={styles.priceText}>$270k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            {/* 12 */}
            <TouchableOpacity onPress={() => navigation.navigate('Modern apartment')}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../assets/images/card11.jpg')}
                        style={styles.cardImage}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>Modern Apartment</Text>
                        <View style={styles.tagContainer}>
                            <View style={styles.tag}>
                <Text style={styles.tagText}>Featured</Text>
              </View>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>For Sale</Text>
                            </View>
                        </View>
                        <View style={[styles.infoContainer, { marginLeft: -6 }]}>
                            <EvilIcons name='location' size={24} color='#2f5e99' />
                            <Text style={styles.infoText}>4884 N, Brooklyn, NY</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='bed' color='#2f5e99' />
                                <Text style={styles.infoText}> 1   </Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name='shower' color='#2f5e99' />
                                <Text style={styles.infoText}> 4    </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require('../assets/images/ruler.png')} style={styles.icon} />
                                <Text style={styles.infoText}>2149 Sq Ft</Text>
                            </View>
                        </View>
                        <View style={styles.footerContainer}>
                            <Text style={styles.footerText}>APARTMENT</Text>
                            <Text style={styles.priceText}>$450k/mo</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
         </View>
        </ScrollView>
    );
};

export default LatestProperties;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        marginTop: -40
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
        width: "60%"
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
        // elevation : 3
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
        marginTop: -8
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
        fontSize: 12,
        fontWeight : "200",
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
        fontWeight: "600"
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
        marginRight: 10
    },
});
