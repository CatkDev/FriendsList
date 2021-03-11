import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import FriendScreen from './FriendScreen';

export default class FriendsScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Freunde</Text>
                <Button
                    title="Gehe zu Freund"
                    onPress={() => alert('Öffnet "Gehe zu Freund"')}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});