import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {HeaderStyles} from "./HeaderStyles";
import Icon from "@expo/vector-icons/build/MaterialIcons";

export default function HeaderComponent() {

	let headerIcons = ["videocam", "search", "account-circle"];

	return (
		<View style={HeaderStyles.header}>
			<View style={HeaderStyles.titleContainer}>
				<Text style={HeaderStyles.title}>Youtube</Text>
			</View>

			<View style={HeaderStyles.rightIcons}>
				{headerIcons.map(headerIcon => (
					<TouchableOpacity>
						<Icon style={HeaderStyles.headerIcons} name={headerIcon} size={35} color={"#FFFFFF"}/>
					</TouchableOpacity>
				))}
			</View>
		</View>
	)
}
