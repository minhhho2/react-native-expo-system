import {Text, View} from "react-native";
import React from "react";
import Button, {ButtonWidth} from "../../components/Button/Button";

export default class ComponentScreen extends React.Component {

	static URL: string = "Component";

	render() {
		return (
			<View>
				<Button
					label={"to home"}
					onPress={() => this.props.navigation.navigate('Home')}
				/>
				<Text>Button Widths</Text>
				{Object.keys(ButtonWidth)
					.filter(key => isNaN(key))
					.map(key => {
						return <Button label="Button Width Example" width={ButtonWidth[key]}/>
					})}
			</View>
		);
	}
}
