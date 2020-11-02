import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from "./src/screens/Home/HomeScreen";
import LibraryScreen from "./src/screens/Library/LibaryScreen";
import {TrendingScreen} from "./src/screens/Trending/TrendingScreen";
import SubscriptionScreen from "./src/screens/Subscription/SubscriptionScreen";

const TabNavigator = createBottomTabNavigator(
	{
		Home: HomeScreen,
		Subscription: SubscriptionScreen,
		Trending: TrendingScreen,
		Library: LibraryScreen
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			tabBarIcon: ({tintColor}) => {
				const {routeName} = navigation.state;
				let iconName = getIconName(routeName);
				return <MaterialCommunityIcons name={iconName} size={25} color={tintColor}/>
			}
		}),
		tabBarOptions: {
			activeTintColor: "tomato",
			inactiveTintColor: "grey"
		}
	}
)

function getIconName(routeName: string) {
	switch (routeName) {
		case "Home":
			return "home";
		case "Library":
			return "folder";
		case "Subscription":
			return "message-video";
		case "Trending":
			return "fire"
		default:
			return "";
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	HomeScreen: {
		backgroundColor: "red",
		flex: 1,
	},
	LibraryScreen: {
		backgroundColor: "red",
		flex: 1
	}
});

const App = createAppContainer(TabNavigator)

export default App;
