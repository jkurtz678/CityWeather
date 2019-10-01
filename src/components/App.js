import React from "react";
import open_weather from "../api/open_weather.js";
import SearchForm from "./SearchForm";
import WeatherCard from "./WeatherCard";
import { kelvToFahr } from "../utils";

class App extends React.Component {
	state = { temp: "", city: "", weather: "", loading: false, error: false };

	onSearchSubmit = async search_term => {
		this.setState({ loading: true, error: false });
		try {
			const response = await open_weather.get("/data/2.5/weather", {
				params: {
					q: search_term,
					APPID: `a7817f829568ccdd73a6f2aa82cb9ae4`
				}
			});
			//console.log(response.data);
			const temp_fahr = kelvToFahr(
				parseInt(response.data.main.temp)
			).toFixed(1);
			this.setState({
				temp: temp_fahr,
				city: response.data.name,
				loading: false,
				error: false
			});
		} catch (error) {
			this.setState({error: true, loading: false});
		}
		//this.setState({temp: 10});
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "50px" }}>
				<SearchForm onSearchSubmit={this.onSearchSubmit} />
				<WeatherCard
					temp={this.state.temp}
					city={this.state.city}
					loading={this.state.loading}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default App;
