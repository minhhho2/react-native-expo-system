import {Text, View} from "react-native";
import React from "react";
import Button, {ButtonWidth} from "../../components/Button/Button";

export default function ComponentScreen() {

	return (
		<View>
			<Text>Button Widths</Text>
			{Object.keys(ButtonWidth)
				.filter(key => isNaN(key))
				.map(key => {
					return <Button label="Button Width Example" width={ButtonWidth[key]}/>
				})}
		</View>
	)
}
