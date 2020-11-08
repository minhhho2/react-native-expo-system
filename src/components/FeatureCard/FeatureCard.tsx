import {Text, View} from "react-native";
import React from "react";
import {FeatureCardStyles} from "./FeatureCardStyles";

export interface IFeatureCardProps {
	// Name of the feature
	name: string;
}
export default function FeatureCard(props: IFeatureCardProps) {
	return (
		<View style={FeatureCardStyles.root}>
			<Text>{props.name}</Text>
		</View>
	)
}
