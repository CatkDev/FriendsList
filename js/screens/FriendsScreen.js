import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList, Text } from 'react-native';

import FriendListItem from '../components/FriendListItem';



export default class FriendsScreen extends Component {

    state = { data: [], isLoading: true };

    _fetchData = async () => {
        /* const data = [
            { first: 'Alice', last: 'Müller', email: 'a.mueller@example.com' },
            { first: 'Bob', last: 'Meier', email: 'meier.b@example.com' },
            { first: 'Jane', last: 'Schulz', email: 'schulz.jane@example.com' },
            { first: 'Joe', last: 'Schröder', email: 'joe.schr@example.com' }
        ]; */
        // Daten statt dessen aus dem Web laden (randomuser.me)
        try {
            const response = await fetch('https://randomuser.me/api/?results= 30');
            const responseJSON = await response.json();
            console.log(responseJSON);

            // Simulation 3 Sekunden um Daten zu laden
            //await new Promise(_ => setTimeout(_, 3000));
            this.setState({ data: responseJSON.results, isLoading: false });
        } catch (error) {
            alert('Keine Internetverbindung');
            this.setState({ isLoading: false });
        }
    }

    _refresh = () => {
        this.setState({ isLoading: true });
        this._fetchData();
    }

    componentDidMount() {
        this._fetchData();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="darkorange" />
                </View>
            );
        }
        return (
            <View style={styles.container} >
                <FlatList
                    data={this.state.data}
                    ItemSeparatorComponent={() =>
                        <View style={styles.listSeparator} />
                    }
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
                    onRefresh={this._refresh}
                    refreshing={this.state.isLoading}
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmpty}>Keine Daten geladen!</Text>
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
        paddingTop: 50,
        justifyContent: 'center'
    },
    listSeparator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightsalmon',
        marginVertical: 5
    },
    listEmpty: {
        paddingTop: 100,
        fontSize: 32,
        textAlign: 'center'
    }
});