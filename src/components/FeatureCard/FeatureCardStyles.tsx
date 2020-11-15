import {StyleSheet} from "react-native";
import {GREY} from "../../constants/ColorVariables";

export const FeatureCardStyles = StyleSheet.create({
	root: {
		backgroundColor: GREY["2"],
		height: 250,
		borderRadius: 10,
		marginBottom: 20,
		marginHorizontal: 20,
	},
	imageBackground: {
		height: '100%',
		width: '100%',
		borderRadius: 10,
	}
})
