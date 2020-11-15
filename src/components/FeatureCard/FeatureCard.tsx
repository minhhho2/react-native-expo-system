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
		<TouchableOpacity
			style={[FeatureCardStyles.root]}
			onPress={() => toggleViewState()}
		>
			{viewState === FeatureCardViewStateEnum.FRONT && FrontView(props)}
			{viewState === FeatureCardViewStateEnum.BACK && BackView(props)}
		</TouchableOpacity>

	)
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
				uri: 'https://www.google.com/search?q=abstract+light+background&sxsrf=ALeKk00-6RJZyWLJTf3nGAlLZCJ8jPZFUQ:1605434198715&tbm=isch&source=iu&ictx=1&fir=yhArlbWZAqVXuM%252C1sTQfkzawziIWM%252C_&vet=1&usg=AI4_-kQKhvfTK-pupNsAyTtVMhl12tCyyw&sa=X&ved=2ahUKEwiLov-4pITtAhVcxzgGHUT5DvAQ9QF6BAgLEGY&biw=1018&bih=1084#imgrc=yhArlbWZAqVXuM&imgdii=d0d0llSS9IeixM'
			}}
		>
			<Text style={{color: COLOR.WHITE, padding: 20}}>{props.description}</Text>
			<Text style={{color: COLOR.WHITE, padding: 20}}>{props.screenUrl}</Text>
		</ImageBackground>
	)
}
