import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Wizard from "../../components/Wizard/Wizard";
import FeatureScreen from "./FeatureScreen";
import {View} from "react-native";
import SwipeableList from "../../components/SwipeableList/SwipeableList";

const FeatureStack = createStackNavigator();

export function FeatureStackScreen() {
	return(
		<FeatureStack.Navigator>
			<FeatureStack.Screen
				name='Feature'
				component={FeatureScreen}
				options={{headerShown: false}}
			/>
			<FeatureStack.Screen name='Feature/Wizard' component={WizardScreen}/>
			<FeatureStack.Screen name='Feature/Swipeable-List' component={SwipeableListScreen}/>
		</FeatureStack.Navigator>
	)
}

function WizardScreen() {
	return(
		<View>
			<Wizard/>
		</View>
	)
}

function SwipeableListScreen() {
	return (
		<View>
			<SwipeableList/>
		</View>
	)
}
