import React from "react";
import {Text, View} from "react-native";
import {observable, observe} from "mobx";

export default class Wizard extends React.Component<any, any> {

	public slides: IWizardSlide[];

	constructor(props: any) {
		super(props);
		this.slides = [WizardSlideOne, WizardSlideTwo] as IWizardSlide[];
	}

	render() {
		return (
			<View>
				<WizardProgress currentSlideIndex={1} slides={this.slides}/>
				<Text>Wizard</Text>
			</View>
		);
	}
}

interface IWizardSlide {
}

class WizardSlideOne extends React.Component<any, any> implements IWizardSlide {

	render() {
		return <View><Text>Slide One</Text></View>;
	}
}


class WizardSlideTwo extends React.Component<any, any> implements IWizardSlide {

	render() {
		return <View><Text>Slide One</Text></View>;
	}
}

interface IWizardProgress {
	slides: IWizardSlide[],
	currentSlideIndex: number,
}

function WizardProgress(props: IWizardProgress) {

	const isActive = (index: number) => props.currentSlideIndex === index;

	return(
		<View style={{
			flexDirection: 'row',
			width: '100%',
		}}>
			{props.slides.map((slide, index) => (
				<View style={{
					alignItems: 'center',
					justifyContent: 'center',
					width: 30,
					height: 30,
					backgroundColor: isActive(index) ? '#0faf9a' : '#ffffff',
					borderWidth: 2,
					borderColor: '#0faf9a',
					borderRadius: 15,
					marginBottom: 10}}
				/>
			))}
		</View>
	)
}

function WizardNavigator() {
	return(
		<View>
			<Text>Progress Bar</Text>
		</View>
	)
}

