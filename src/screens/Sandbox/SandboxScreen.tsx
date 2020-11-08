import {Text, View} from "react-native";
import React from "react";
import FeatureCard, {IFeatureCardProps} from "../../components/FeatureCard/FeatureCard";

export default function SandboxScreen() {
	const features: IFeatureCardProps[] = [
		{
			name: 'Example One'
		},
		{
			name: 'Example Two'
		}
	]
	return (
		<View>
			<View>

				<Text>Sandbox features</Text>
				<View>
					{features.map(feature => {
						return (
							<FeatureCard name={feature.name}/>
						)
					})}
				</View>
			</View>
		</View>
	)
}
