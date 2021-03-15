import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import FriendListItem from '../components/FriendListItem';

export default class FriendsScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <FlatList
                    ItemSeparatorComponent={() =>
                        <View style={styles.listSeparator} />
                    }
                    data={[
                        { first: 'Alice', last: 'Müller', email: 'a.mueller@example.com' },
                        { first: 'Bob', last: 'Meier', email: 'meier.b@example.com' },
                        { first: 'Jane', last: 'Schulz', email: 'schulz.jane@example.com' },
                        { first: 'Joe', last: 'Schröder', email: 'joe.schr@example.com' }
                    ]}
                    keyExtractor={item => item.email}
                    renderItem={({ item }) => (
                        <FriendListItem
                            friend={item}
                            onPress={() =>
                                this.props.navigation.navigate('FriendScreen', {
                                    friend: item
                                })
                            }
                        />
                    )}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    listSeparator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightsalmon',
        marginVertical: 5
    }
});