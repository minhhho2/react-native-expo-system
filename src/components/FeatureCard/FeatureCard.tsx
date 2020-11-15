import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {FeatureCardStyles} from "./FeatureCardStyles";
import {useNavigation} from "@react-navigation/native";
import {COLOR, GREY} from "../../constants/ColorVariables";

export interface IFeatureCardProps {
	// Name of the feature
	name: string;

	// Description of the feature
	description: string;

	// Url to navigate to screen
	screenUrl: string;
}

export default function FeatureCard(props: IFeatureCardProps) {

	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={[FeatureCardStyles.root]}
			onPress={() => navigation.navigate(props.screenUrl)}
		>
			<ImageBackground
				imageStyle={FeatureCardStyles.imageBackground}
				style={FeatureCardStyles.imageBackground}
				source={{
					uri: 'https://wallpapercave.com/wp/wp2149971.jpg',
				}}
			>
				<View style={{marginTop: 'auto'}}>
					<View style={{backgroundColor: 'rgba(30, 30, 30, 0.6)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
						<Text style={{color: COLOR.WHITE, padding: 20}}>{props.name}</Text>
					</View>
				</View>
			</ImageBackground>


		</TouchableOpacity>

	)
}
