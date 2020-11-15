import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import FeatureCard, {IFeatureCardProps} from "../../components/FeatureCard/FeatureCard";

export default function FeatureScreen() {
	const features: IFeatureCardProps[] = [
		{
			name: "Example One",
			description: 'description',
			screenUrl: "Bubble",
		},
		{
			name: "Example Two",
			description: 'description',
			screenUrl: "Home",
		}
	]
	return (
		<View>
			<View>
				<Text>Features</Text>
				{features
					.sort((featureOne: IFeatureCardProps, featureTwo:IFeatureCardProps) => featureOne.name.localeCompare(featureTwo.name))
					.map(feature => <FeatureCard {...feature} />)
				}
			</View>
		</View>
	)
}
