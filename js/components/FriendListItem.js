import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function (props) {
    const { friend, onPress } = props;
    const image = friend.picture.thumbnail;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
                <View style={styles.text}>
                    <Text style={styles.name}>{friend.name.first} {friend.name.last}</Text>
                    <Text style={styles.email}>{friend.email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        height: 66,
        width: 66,
        marginRight: 10,
        borderRadius: 33
    },
    text: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    name: {
        fontSize: 20
    },
    email: {
        fontSize: 16,
        fontWeight: '100'
    }
})