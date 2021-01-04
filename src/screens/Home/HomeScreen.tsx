import {Text, View} from "react-native";
import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Button from "../../components/Button/Button";
import { useNavigation } from '@react-navigation/native';

export default class HomeScreen extends React.Component {

	static URL: string = 'Home';

	render() {

		return (
			<View>
				<Button
					label={"to component"}
					onPress={() => this.props.navigation.navigate('Feature')}
				/>
				<HeaderComponent/>
			</View>
		);
	}
}
