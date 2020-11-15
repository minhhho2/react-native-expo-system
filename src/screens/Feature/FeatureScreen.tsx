import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import FeatureCard, {IFeatureCardProps} from "../../components/FeatureCard/FeatureCard";

export default function FeatureScreen() {
	const features: IFeatureCardProps[] = [
		{
			name: "Home",
			description: 'Example description for home.',
			screenUrl: "Home",
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
