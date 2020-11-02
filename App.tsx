import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import {Icon} from "expo/build/removed.web";

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
				// return <Icon name={iconName} size={25} color={tintColor} />
			}
		})
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

function HomeScreen() {
	return <View>
		<Text>Home</Text>
	</View>
}

function SubscriptionScreen() {
	return <View>
		<Text>Subscription</Text>
	</View>
}

function TrendingScreen() {
	return <View>
		<Text>Trending</Text>
	</View>
}

function LibraryScreen() {
	return <View>
		<Text>Library</Text>
	</View>
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
