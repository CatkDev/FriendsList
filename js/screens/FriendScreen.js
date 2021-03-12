import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class FriendScreen extends Component {
    render() {
        const friend = this.props.route.params.friend;
        return (
            <View style={styles.container} >
                <Text>{friend}</Text>
                <Button
                    title="Zurück"
                    onPress={() => this.props.navigation.goBack()}
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