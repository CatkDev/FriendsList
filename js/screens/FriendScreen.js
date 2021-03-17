import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native';

export default class FriendScreen extends Component {
    render() {
        const friend = this.props.route.params.friend;
        return (
            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={styles.container}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/icon.png')}
                />
                <Text>{friend.first} {friend.last}</Text>
            </ScrollView>
        );
    }
};

const width = Dimensions.get('window').width * 0.75;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    scrollview: {
        backgroundColor: '#fff',
    },
    image: {
        height: width,
        width: width,
        marginBottom: 20
    }
});