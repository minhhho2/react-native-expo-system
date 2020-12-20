import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {HeaderStyles} from "./HeaderStyles";
import Icon from "@expo/vector-icons/build/MaterialIcons";

export default function HeaderComponent() {

	return (
		<View style={HeaderStyles.container}>
			<TouchableOpacity>
				<Icon style={HeaderStyles.headerIcons}
				      name={"chevron-left"}
				      size={35}
				/>
			</TouchableOpacity>

			<View style={HeaderStyles.titleContainer}>
				<Text style={HeaderStyles.title}>Youtube</Text>
			</View>

			<TouchableOpacity>
				<Icon style={HeaderStyles.headerIcons}
				      name="more"
				      size={35}
				/>
			</TouchableOpacity>
		</View>
	)
}

