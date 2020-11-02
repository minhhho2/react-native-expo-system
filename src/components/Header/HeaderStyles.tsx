import {StyleSheet} from "react-native";

export const HeaderStyles = StyleSheet.create({
	header:{
		height: 60,
		backgroundColor: "#E52116",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	title: {
		color: "#FFFFFF",
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
		marginHorizontal: 10
	}
})
