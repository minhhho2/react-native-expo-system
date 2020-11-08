import {Text, View} from "react-native";
import React from "react";
import {COLOR, GREY} from "../../constants/ColorVariables";

export default function LibraryScreen() {
	return (
		<View>
			<View>

				<Text>Background Colors</Text>
				<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
					{Object.keys(GREY).map(key => {
						return (
							<View style={{backgroundColor: GREY[key], width: 100, height: 100, justifyContent: 'center', alignItems: 'center'}}>
								<Text>{GREY[key]}</Text>
							</View>
						)
					})}
				</View>
			</View>
			<View>
				<Text>Colors</Text>
				<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
					{Object.keys(COLOR).map(key => {
						return (
							<View style={{backgroundColor: COLOR[key], width: 100, height: 100, justifyContent: 'center', alignItems: 'center'}}>
								<Text>{COLOR[key]}</Text>
							</View>
						)
					})}
				</View>
			</View>
		</View>
	)
}
