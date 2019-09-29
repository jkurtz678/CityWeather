import axios from "axios"

// //const API_KEY = process.env.OPEN_WEATHER_API_KEY;

export default axios.create( {
	baseURL: "https://api.openweathermap.org"
	// headers: {
	// 	'Content-Type' : 'application/json',
	// 	'Accept' : 'application/json'
	// 	//Authorization: "ClientI a7817f829568ccdd73a6f2aa82cb9ae4"
	// }
});