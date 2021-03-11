import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class FriendScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>FREUND</Text>
                <Button
                    title="Zurück"
                    onPress={() => alert('Zurück')}
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