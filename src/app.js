let weather = {
	paris: {
		temp: 19.7,
		humidity: 80,
	},
	tokyo: {
		temp: 17.3,
		humidity: 50,
	},
	lisbon: {
		temp: 30.2,
		humidity: 20,
	},
	sanFrancisco: {
		temp: 20.9,
		humidity: 100,
	},
	oslo: {
		temp: -5,
		humidity: 20,
	},
};

let city = prompt('Enter a city');

const cityWeather = weather[city];
let message;

message = cityWeather
	? `It is currently ${Math.round(
			cityWeather.temp
	  )} in ${city} with a humidity of ${Math.round(cityWeather.humidity)}%`
	: `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`;

alert(message);
