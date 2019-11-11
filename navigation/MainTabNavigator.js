import React from 'react';
import { View } from 'react-native';
import Homepage from "../pages/Homepage";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Settingspage from "../pages/Settingspage";
import Favoritespage from "../pages/Favoritespage";
import Icon from 'react-native-vector-icons/Ionicons';

const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Homepage,
            navigationOptions: {
                tabBarLabel: 'Accueil',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-home'} />
                ),
                barStyle: { backgroundColor: 'black' }
            }
        },

        Favorites: {
            screen: Favoritespage,
            navigationOptions: {
                tabBarLabel: 'Favoris',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-star'} />
                ),
                barStyle: { backgroundColor: 'black' }
            }
        },

        Settings: {
            screen: Settingspage,
            navigationOptions: {
                tabBarLabel: 'Parameters',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-settings'} />
                ),
                barStyle: { backgroundColor: 'black' }
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default tabNavigator;