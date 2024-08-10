import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { FontAwesome } from '@expo/vector-icons'

const CompleteMap = () => {
    const [region, setRegion] = useState({
        latitude: 28.810763,
        longitude: 70.529778,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
    })

    const handlePress = (data, details) => {
        const { lat, lng } = details.geometry.location
        setRegion({
            ...region,
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        })
    }

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={handlePress}
                query={{
                    key: 'AIzaSyBGcZmc9ZFcfyy6EfqGfdY8KM9TrTeYYnA',
                    language: 'en',
                }}
                styles={{
                    container: styles.searchContainer,
                    textInput: styles.searchInput,
                }}
            />
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    region={region}
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
                        title="Pakistan"
                    />
                </MapView>
            </View>
        </View>
    )
}

export default CompleteMap

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        position: 'absolute',
        top: '2%',
        left: '10%',
        width: '80%',
        zIndex: 1,
        paddingVertical: 14,
       
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        margin : "auto",
    },
    mapContainer: {
        flex: 1,
        borderRadius: 8,
        overflow: 'hidden',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
