import "./WeatherCard.css";
import React from "react";

class WeatherCard extends React.Component {
	renderContent() {
		if (this.props.error) {
			return (
				<React.Fragment>
					<i className="massive triangle exclamation icon"></i>
					<h1>City not found!</h1>
				</React.Fragment>
			);
		}
		else if (this.props.loading) {
			console.log("loading called...");
			return (
				<div className="ui active inverted dimmer">
					<div className="ui text loader">Loading</div>
					<p></p>
				</div>
			);
		} else {
			return (
				<React.Fragment>
					<i className="massive cloud sun icon"></i>
					<h1>{this.props.temp}°F</h1>
					<h1>{this.props.city}</h1>
				</React.Fragment>
			);
		}
	}

	render() {
		return (
			<div className="ui segment container center aligned weather-card">
				{this.renderContent()}
			</div>
		);
	}
}

WeatherCard.defaultProps = {
	temp: 0,
	city: "city name"
};

export default WeatherCard;
