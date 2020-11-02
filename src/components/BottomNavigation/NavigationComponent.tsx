import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/Home/HomeScreen";
import SubscriptionScreen from "../../screens/Subscription/SubscriptionScreen";
import LibraryScreen from "../../screens/Library/LibaryScreen";
import React from "react";
import TrendingScreen from "../../screens/Trending/TrendingScreen";
import {AntDesign, Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import {Icon} from "expo/build/removed.web";

const Tab = createBottomTabNavigator();

const icons = {
	Home: {
		lib: AntDesign,
		name: 'home'
	},
	Subscription: {
		lib: MaterialCommunityIcons,
		name: 'youtube-subscription'
	},
	Trending: {
		lib: Feather,
		name: 'trending-up'
	},
	Library: {
		lib: MaterialCommunityIcons,
		name: 'library-shelves'
	}
}

export default function NavigationComponent() {

	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarIcon: ({color, size}) => {
					// @ts-ignore
					const {lib: Icon, name} = icons[route.name];
					return <Icon name={name} color={color} size={size}/>
				},
			})}
			tabBarOptions={{
				style: {
					backgroundColor: '#131418',
					borderTopColor: 'rgba(255, 255, 255, 0.2)'
				},
				activeTintColor: '#FFFFFF',
				inactiveTintColor: '#929292',
			}}

		>
			<Tab.Screen name={"Home"} component={HomeScreen} />
			<Tab.Screen name={"Subscription"} component={SubscriptionScreen} />
			<Tab.Screen name={"Trending"} component={TrendingScreen} />
			<Tab.Screen name={"Library"} component={LibraryScreen} />
		</Tab.Navigator>
	)
}
