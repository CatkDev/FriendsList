import React, { Component } from 'react';
import { StyleSheet, SectionList, View, Text } from 'react-native';

function SettingsItem(props) {
    return (<Text style={styles.item}>{props.text}</Text>)
}

function SettingsHeader(props) {
    return (<Text style={styles.sectionHeader}>{props.title}</Text>)
}

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <SectionList
                    sections={
                        [
                            {
                                title: 'Version',
                                data: [{
                                    key: '1',
                                    info: '1.0'
                                }]
                            },
                            {
                                title: 'Impressum',
                                data: [
                                    {
                                        key: '2',
                                        info: 'Catrin Knöller'
                                    },
                                    {
                                        key: '3',
                                        info: 'copyright 2021'
                                    }
                                ]
                            }
                        ]
                    }
                    renderItem={({ item }) => <SettingsItem text={item.info} />}
                    renderSectionHeader={({ section }) => <SettingsHeader title={section.title} />}
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
    sectionHeader: {
        backgroundColor: 'whitesmoke',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        fontSize: 18,
        padding: 5
    },
    item: {
        color: 'dimgrey',
        fontSize: 18,
        padding: 5
    }
});