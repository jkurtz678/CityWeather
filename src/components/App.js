import React from "react";
import open_weather from "../api/open_weather.js";
import SearchForm from "./SearchForm";

class App extends React.Component {
	onSearchSubmit = async search_term => {
		const response = await open_weather.get("/data/2.5/weather", {
			params: {
				q: search_term,
				APPID: `a7817f829568ccdd73a6f2aa82cb9ae4`
			}
		});
		console.log(response.data.main.temp);
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: "50px" }}>
				<SearchForm onSearchSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
