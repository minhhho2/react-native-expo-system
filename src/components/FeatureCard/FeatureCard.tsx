import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
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

enum FeatureCardViewStateEnum {
	FRONT,
	BACK
}


export default function FeatureCard(props: IFeatureCardProps) {

	const [viewState, setViewState] = useState<FeatureCardViewStateEnum>(FeatureCardViewStateEnum.FRONT)

	const toggleViewState = () => setViewState(
		viewState === FeatureCardViewStateEnum.FRONT
			? FeatureCardViewStateEnum.BACK
			: FeatureCardViewStateEnum.FRONT
	)

	return (
		<TouchableOpacity style={[FeatureCardStyles.root]} onPress={() => toggleViewState()}>
			{RenderCardView(props, viewState)}
		</TouchableOpacity>
	)
}

/**
 * Container component for rendering a specific view of the FeatureCard depending on the view state.
 * @param props
 * @param state
 * @constructor
 */
function RenderCardView(props: IFeatureCardProps, state: FeatureCardViewStateEnum) {
	switch (state) {
		case FeatureCardViewStateEnum.FRONT:
			return FrontView(props);
		case FeatureCardViewStateEnum.BACK:
			return BackView(props);
		default:
			return <View>There was an error displaying the card</View>
	}
}

function FrontView(props: IFeatureCardProps) {
	const navigation = useNavigation();

	return (
		<ImageBackground
			imageStyle={FeatureCardStyles.imageBackground}
			style={FeatureCardStyles.imageBackground}
			source={{
				uri: 'https://wallpapercave.com/wp/wp2149971.jpg',
			}}
		>
			<View style={{marginTop: 'auto'}}>
				<TouchableOpacity
					onPress={() => navigation.navigate(props.screenUrl)}
				>

					<View style={{
						backgroundColor: 'rgba(30, 30, 30, 0.6)',
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10
					}}>
						<Text style={{color: COLOR.WHITE, padding: 20}}>{props.name}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	)
}

function BackView(props: IFeatureCardProps) {
	return (
		<ImageBackground
			imageStyle={FeatureCardStyles.imageBackground}
			style={FeatureCardStyles.imageBackground}
			source={{
				uri: 'https://img.freepik.com/free-photo/abstract-polygonal-space-low-poly-dark-background-3d-rendering_7247-223.jpg?size=626&ext=jpg',
			}}
		>
			<Text style={{color: COLOR.WHITE, padding: 20}}>{props.description}</Text>
			<Text style={{color: COLOR.WHITE, padding: 20}}>{props.screenUrl}</Text>
		</ImageBackground>
	)
}
