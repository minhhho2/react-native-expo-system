import React from "react";
import {Text} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import styled from "styled-components/native";
import {LinearGradient} from "expo-linear-gradient";

const PayButtonStyles = styled(LinearGradient)`
	width: 60px;
	height: 60px;
	border-radius: 30px;
	align-items: center;
	justify-content: center;
`
const Label = styled.Text`
	font-size: 12px;
	color: #FFFFFF;
`

export default function PayButton() {
	return <PayButtonStyles colors={['#00FC6C', '#00AC4A']} start={[1, 0.2]}>
		<MaterialIcons name={"attach-money"} size={30} color={"#FFFFFF"}/>
		<Label>Paper</Label>
	</PayButtonStyles>
}
