import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as Icon from '@expo/vector-icons';

import FriendsScreen from './screens/FriendsScreen';
import SettingsScreen from './screens/SettingsScreen';
import FriendScreen from './screens/FriendScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FriendsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'aliceblue' }
            }}
        >
            <Stack.Screen name="FriendsScreen" component={FriendsScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="FriendScreen"
                component={FriendScreen}
                options={
                    ({ route }) => {
                        const friendId = route.params.friendId;
                        return {
                            headerBackTitle: null,
                            headerTitleAlign: 'center',
                            headerTitle: friendId
                        }
                    }
                }
            />
        </Stack.Navigator>
    )
}

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
                    component={FriendsStack}
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
