import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from '@expo/vector-icons';

import FriendsScreen from './screens/FriendsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={
                    ({ route }) => {
                        return {
                            tabBarIcon: ({ focused, color, size }) => {
                                let icon;

                                if (route.name === 'Home') {
                                    icon = focused ? "people" : "people-outline";
                                }
                                else if (route.name == 'Settings') {
                                    icon = focused ? "settings" : "settings-outline";
                                }
                                return (
                                    <Icon.Ionicons
                                        name={icon}
                                        size={size}
                                        color={color}
                                    />
                                );
                            },
                        };
                    }}
                tabBarOptions={{
                    activeTintColor: 'orange',
                    style: { backgroundColor: 'aliceblue' }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={FriendsScreen}
                    options={{
                        title: 'Freunde'
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: 'Einstellungen'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
