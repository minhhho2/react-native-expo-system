import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {DebugStyle} from "../../styles/DebugStyle";
import {ButtonStyle} from "./ButtonStyle";
import {COLOR} from "../../constants/ColorVariables";

interface IButtonProps {
	label: string;
	width?: ButtonWidth;
	onPress?: () => void;
}

// Determines the structure of the button
export enum ButtonDisplay {
	Solid,
	Outline,
	Text
}

// Determines the width of the button
export enum ButtonWidth {
	Wrap,   // wraps text
	Half,   // 50% of parent view
	Full,   // 100% of parent view
}

export enum ButtonColor {
	Primary,
	Secondary,
	Error,
	Warning,
	Success,

}
export default function Button(props: IButtonProps) {
	const {label, onPress} = props;

	const widthStyle = getWidthStyle(props.width);
	const displayStyle = getDisplayStyle(props.display);
	const colorStyle = getColor(undefined)
	return (
		//View automatically stretches the width of the screen. Adding flex direction makes it wrap the  text
		<View style={[widthStyle]}>
			<TouchableOpacity
				style={[colorStyle]}
				onPress={() => {
					if (onPress) {
						onPress();
					}
				}}
			>
				<Text style={[]}>{label}</Text>
			</TouchableOpacity>
		</View>
	)
}

function getWidthStyle(type: ButtonWidth | undefined) {
	switch (type) {
		case ButtonWidth.Wrap:
			return ButtonStyle.widthWrap;
		case ButtonWidth.Half:
			return ButtonStyle.widthHalf;
		case ButtonWidth.Full:
			return ButtonStyle.widthFull;
		default:
			return ButtonStyle.widthWrap;
	}
}

function getColor(type: ButtonColor | undefined) {
	switch (type) {
		case ButtonColor.Primary:
			break;
		case ButtonColor.Secondary:
			break;
		case ButtonColor.Error:
			break;
		case ButtonColor.Warning:
			break;
		case ButtonColor.Success:
			break;
		default:
			return { backgroundColor: COLOR.DARK_CYAN}

	}
}

function getDisplayStyle(type: ButtonDisplay | undefined) {
	switch (type) {
		case ButtonDisplay.Solid:
			break;
		case ButtonDisplay.Outline:
			break;
		case ButtonDisplay.Text:
			break;
		default:
			break;

	}
}
