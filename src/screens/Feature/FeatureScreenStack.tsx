import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Wizard from "../../components/Wizard/Wizard";
import FeatureScreen from "./FeatureScreen";
import {View} from "react-native";

const FeatureStack = createStackNavigator();

export function FeatureStackScreen() {
	return(
		<FeatureStack.Navigator>
			<FeatureStack.Screen name='Feature' component={FeatureScreen}/>
			<FeatureStack.Screen name='Feature/Wizard' component={WizardScreen}/>
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
