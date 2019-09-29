import axios from "axios"

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

export default axios.create( {
	baseURL: "https://api.openweathermap.org",
	headers: {
		Authorization: API_KEY;
	}
});