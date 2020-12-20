import {StyleSheet} from "react-native";
import {COLOR} from "../../constants/ColorVariables";

export const HeaderStyles = StyleSheet.create({
	container:{
		height: 60,
		backgroundColor: "#E52116",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	title: {
		color: COLOR.WHITE,
		fontSize: 22,
		fontWeight: "bold",
	},
	titleContainer: {
		paddingLeft: 20,
		justifyContent: "center",
	},
	rightIcons: {
		flexDirection: "row",
		alignItems: "center"
	},
	headerIcons: {
		marginVertical: "auto",
		marginHorizontal: 10,
		color: COLOR.WHITE
	}
})
