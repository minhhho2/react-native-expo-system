import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import FeatureCard, {IFeatureCardProps} from "../../components/FeatureCard/FeatureCard";
import Button from "../../components/Button/Button";
import {createStackNavigator} from "@react-navigation/stack";


export default class FeatureScreen extends React.Component {
	static URL: string = 'Home';

	public features: IFeatureCardProps[] = [
		{
			name: "Wizard",
			description: 'Step Wizard',
			screenUrl: "Feature/Wizard",
		},
		{
			name: "Subscription",
			description: 'Example description for subscription.',
			screenUrl: "Subscription",
		},
		{
			name: "Library",
			description: 'Example description for library.',
			screenUrl: "Library",
		},
		{
			name: "Feature",
			description: 'Example description for feature.',
			screenUrl: "Feature",
		}
	]

	render() {
		return (
			<ScrollView>
				{this.features
					.sort((featureOne: IFeatureCardProps, featureTwo: IFeatureCardProps) => featureOne.name.localeCompare(featureTwo.name))
					.map(feature => <FeatureCard {...feature} />)
				}
				<Button
					label={"to component"}
					onPress={() => this.props.navigation.navigate('Feature/Wizard')}
				/>
			</ScrollView>
		);
	}
}
