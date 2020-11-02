import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import NavigationComponent from "./src/components/BottomNavigation/NavigationComponent";

export default function App() {
	return(
		<NavigationContainer>
			<NavigationComponent/>
		</NavigationContainer>
	)
}
