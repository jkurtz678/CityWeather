import "./WeatherCard.css";
import React from "react";

class WeatherCard extends React.Component {

	getWeatherIcon = () => {
		let iconClass = "icon massive";
		switch(this.props.weather) {
			case 'Drizzle':
			case 'Rain':
				iconClass = iconClass + " cloud rain";
				break;
			case 'Clouds':
				iconClass = iconClass + " cloud";
				break;
			case 'Clear':
				iconClass = iconClass + " sun";
				break;
			default: 
				console.log("UNCATAGORIZED weather: " + this.props.weather)
				iconClass = iconClass + " sun";
		}
		console.log("iconClass: " + iconClass);
		return iconClass;
	}

	renderContent() {
		if (this.props.error) {
			return (
				<React.Fragment>
					<i
						className="massive triangle exclamation icon"
						style={{ marginTop: "35px" }}
					></i>
					<h1>City not found!</h1>
				</React.Fragment>
			);
		} else if (this.props.loading) {
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
					<i className={this.getWeatherIcon()}></i>
					<h1>{this.props.temp}°F</h1>
					<h1>{this.props.city}</h1>
				</React.Fragment>
			);
		}
	}

	render() {
		return (
			<div
				className={
					"ui segment container center aligned weather-card" +
					(this.props.shouldHide ? " hidden" : "")
				}
			>
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
