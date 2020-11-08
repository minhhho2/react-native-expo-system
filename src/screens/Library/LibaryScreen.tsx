import {Text, View} from "react-native";
import React from "react";
import {COLOR, GREY} from "../../constants/ColorVariables";

export default function LibraryScreen() {
	return (
		<View>
			<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>

				{Object.keys(GREY).map(key => {
					return (
						<View style={{backgroundColor: GREY[key], width: 100, height: 100}}>

						</View>
					)
				})}
			</View>

			<Text>Component Library Demonstration</Text>
		</View>
	)
}
