import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HomeSearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <FontAwesome name="search" size={20} color="#888" />
                <TextInput
                    style={styles.input}
                    placeholder='Search'
                    placeholderTextColor='#ddd'
                    keyboardType='default'
                />
                <FontAwesome name="th-list" size={20} color="#888" />
            </View>
        </View>
    );
}

export default HomeSearchBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        marginTop:20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        // shadowColor: '#000',
        // shadowOpacity: 0.2,
        // shadowRadius: 8,
        // elevation: 3,
        paddingVertical : 4
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 14,
        color: '#ddd',
        marginHorizontal: 16,
    },
});
