import { ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons'; 
import { useNavigation } from '@react-navigation/native';

const NavigationKeyAllPages = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="#2f5e99" />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor='#8a8a8a'
                        style={styles.searchInput}
                    />
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <Foundation name="refresh" size={24} color="#2f5e99"  />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <FontAwesome name="map-o" size={18} color="#2f5e99" style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" size={18} color="#2f5e99" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.filterContainer}>
                    <TouchableOpacity>
                        <View style={styles.filterButton}>
                            <AntDesign name="filter" size={20} color="#fff" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.filterButtonWithText}>
                            <AntDesign name="checkcircleo" size={16} color="#fff" />
                            <Text style={styles.filterText}>For Rent</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.filterButtonWithText}>
                            <MaterialCommunityIcons name="hospital-building" size={16} color="#fff" />
                            <Text style={styles.filterText}>All</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.resultsContainer}>
                    <View>
                        <Text style={styles.resultsText}>22 Results</Text>
                        <Text style={styles.subResultsText}>Showing 'Newest' results</Text>
                    </View>
                    <View style={styles.viewToggleContainer}>
                        <TouchableOpacity>
                            <View style={styles.viewToggleButton}>
                                <AntDesign name="appstore-o" size={20} color="#2f5e99" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.viewToggleButton}>
                                <MaterialCommunityIcons name="menu" size={24} color="#2f5e99" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 01 */}
                <View style = {{paddingHorizontal : 10 , marginTop : 4 , marginBottom : 26}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Relaxing')}>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../assets/images/kn01.jpg')}
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
                    <TouchableOpacity onPress={() => navigation.navigate('Comfortable')}>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../assets/images/kn6.jpg')}
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
                    <TouchableOpacity onPress={() => navigation.navigate('Design apartment')}>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../assets/images/kn5.jpg')}
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
                    <TouchableOpacity onPress={() => navigation.navigate('Relaxing')}>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../assets/images/kn4.jpg')}
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
                    <TouchableOpacity onPress={() => navigation.navigate('ample studio')}>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                <View style = {{paddingHorizontal : 10 , marginTop : 10 , marginBottom : 26}}>
                    <TouchableOpacity>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../assets/images/kn01.jpg')}
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
                    <TouchableOpacity>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../assets/images/kn6.jpg')}
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
                    <TouchableOpacity>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../assets/images/kn5.jpg')}
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
                    <TouchableOpacity>
                        <View style={styles.cardContainer}>
                            <Image
                                source={require('../assets/images/kn4.jpg')}
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
        </View>
    );
}

export default NavigationKeyAllPages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        marginTop : 28
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f1f3f5',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        color: '#333',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        // paddingBottom : 6
    },
    icon: {
        marginLeft: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    filterButton: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: '#2f5e99',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    filterButtonWithText: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        borderRadius: 16,
        backgroundColor: '#2f5e99',
        paddingHorizontal: 10,
        marginRight: 10,
    },
    filterText: {
        marginLeft: 8,
        color: '#fff',
        fontSize: 14,
    },
    resultsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    resultsText: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: .7
    },
    subResultsText: {
        fontSize: 12,
        color: '#666',
    },
    viewToggleContainer: {
        flexDirection: 'row',
    },
    viewToggleButton: {
        marginLeft: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        // shadowColor: 'black',
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // shadowOffset: { width: 0, height: 2 },
        marginBottom: 8,
        // elevation: 1,


    },
    cardImage: {
        width: 120,
        height: 136,
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
        fontSize: 14,
        fontWeight: "200",
    },
        
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: 6
        marginTop : -2
    },
    footerText: {
        color: '#2f5e99',
        fontSize: 14,
        fontWeight: "600",
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
        marginRight: 10,
        
    },
    icon : {
        height :17,
        width : 14,
    }
});
