import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/Home/HomeScreen";
import SubscriptionScreen from "../../screens/Subscription/SubscriptionScreen";
import LibraryScreen from "../../screens/Library/LibaryScreen";
import React from "react";
import {AntDesign, Feather, MaterialCommunityIcons} from "@expo/vector-icons";
import {Icon} from "expo/build/removed.web";
import {NavigationStyles} from "./NavigationStyles";
import {COLOR} from "../../constants/ColorVariables";
import FeatureScreen from "../../screens/Feature/FeatureScreen";
import BubbleScreen from "../../screens/Bubbles/BubbleScreen";

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

	Library: {
		lib: MaterialCommunityIcons,
		name: 'library-shelves'
	},
	Feature: {
		lib: Feather,
		name: 'trending-up'
	},
}

export default function NavigationComponent() {

	return (
		<Tab.Navigator
			initialRouteName="Feature"
			screenOptions={({route}) => ({
				tabBarIcon: ({color, size}) => {
					if (!Object.keys(icons).includes(route.name)) {
						return;
					}
					// @ts-ignore
					const {lib: Icon, name} = icons[route.name];
					return<Icon name={name} color={color} size={size}/>
				},
			})}
			tabBarOptions={{
				style: NavigationStyles.tabBackground,
				activeTintColor: COLOR.DARK_CYAN,
				inactiveTintColor: COLOR.BLACK,
			}}
		>
			<Tab.Screen
				name={"Home"}
				component={HomeScreen}
			/>
			<Tab.Screen
				name={"Subscription"}
				component={SubscriptionScreen}
			/>
			<Tab.Screen
				name={"Library"}
				component={LibraryScreen}/>
			<Tab.Screen
				name={"Feature"}
				component={FeatureScreen}/>
		</Tab.Navigator>
	)
}
