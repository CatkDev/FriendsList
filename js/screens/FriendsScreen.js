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
                        { name: 'Alice' },
                        { name: 'Bob' },
                        { name: 'Jane' },
                        { name: 'Joe' }
                    ]}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <FriendListItem
                            friend={item}
                            onPress={() =>
                                this.props.navigation.navigate('FriendScreen', {
                                    friend: item.name
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