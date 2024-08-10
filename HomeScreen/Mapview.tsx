import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

const MapOrigin = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TouchableOpacity style={styles.mapLink} onPress={() => navigation.navigate('Map')}>
                        <Text style={styles.mapLinkText}>Open in Map</Text>
                        <FontAwesome name='chevron-right' size={12} color='#2f5e99' style={{ marginTop: 4 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>City:</Text>
                        <Text style={styles.value}>Miami</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Area:</Text>
                        <Text style={styles.value}>Brikelpur</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Status:</Text>
                        <Text style={styles.value}>Florida</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                    <View style={styles.mapContainer}>

                        <MapView
                            style={styles.map}
                            region={{
                                latitude: 28.810763,
                                longitude: 70.529778,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1,
                            }}
                        >
                            <Marker
                                coordinate={{
                                    latitude: 28.810763,
                                    longitude: 70.529778,
                                }}
                                title="Zahir pir"
                            />
                            <Marker
                                coordinate={{
                                    latitude: 28.421475,
                                    longitude: 70.306233,
                                }}
                                title="Rahim Yar Khan"
                            />
                        </MapView>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MapOrigin;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    column: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#555',
    },
    mapLink: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mapLinkText: {
        color: '#2f5e99',
        marginRight: 5,
        fontSize: 16,
    },
    mapContainer: {
        height: 150,
        marginTop: 15,
        borderRadius: 8,
        overflow: 'hidden',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
