import {
	BsStarFill,
	BsStarHalf,
	BsStar,
} from 'react-icons/bs';

const Data = [
	{
		id: 1,
		title: 'By city name or By city ID',
		text: `You can call by city name, state code and country
    code. Please note that searching by states available
    only for the USA locations.`,
		label: 'Current Weather Data',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarFill /> },
			{ four: <BsStarFill /> },
			{ five: <BsStarHalf />  },
		],
	},
	{
		id: 2,
		title: 'By geographic coordinates',
		text: `You can call by location and geographic coordinates.`,
		label: 'Current Weather Data',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarHalf />  },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
	{
		id: 3,
		title: 'By ZIP code',
		text: `Please note if country is not specified then the
    search works for USA as a default.`,
		label: 'Current Weather Data',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarHalf />  },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
	{
		id: 4,
		title: 'Cities within a rectangle zone',
		text: `API returns the data from cities within the defined
    rectangle specified by the geographic coordinates.`,
		label: 'Current Weather Data',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarHalf />  },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
	{
		id: 5,
		title: 'Cities in circle',
		text: `API returns data from cities laid within definite
    circle that is specified by center point (lat, lon) and
    expected number of cities (cnt) around this point.`,
		label: 'Current Weather Data',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarFill /> },
			{ four: <BsStarFill /> },
			{ five: <BsStarHalf />  },
		],
	},
	{
		id: 6,
		title: 'Call for several city IDs',
		text: `There is a possibility to get current weather
    data for several cities by making one API call.`,
		label: 'Current Weather Data',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarHalf />  },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
	{
		id: 7,
		title: 'By city name or By city ID',
		text: `You can search weather forecast for 4 days
    (96 hours) with data every hour by city name. All
    weather data can be obtained in JSON and XML formats.`,
		label: 'Hourly Forecast 4 days',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarFill /> },
			{ four: <BsStarFill /> },
			{ five: <BsStarHalf />  },
		],
	},
	{
		id: 8,
		title: 'By geographic coordinates',
		text: `You can search weather forecast for 4 days with
    data every hour by geographic coordinates.`,
		label: 'Hourly Forecast 4 days',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarHalf />  },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
	{
		id: 9,
		title: 'By ZIP code',
		text: `Please note if country is not specified then the
    search works for USA as a default.`,
		label: 'Hourly Forecast 4 days',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarHalf />  },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
	{
		id: 10,
		title: 'By city name or By city ID',
		text: `You can search 16 day weather forecast with daily
    average parameters by city name. All weather data can be
    obtained in JSON and XML formats.`,
		label: 'Daily Forecast 16 days',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarHalf />  },
			{ three: <BsStar/> },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
	{
		id: 11,
		title: 'By geographic coordinates',
		text: `You can seach 16 day weather forecast with daily
    average parameters by geographic coordinats. All weather
    data can be obtained in JSON and XML formats`,
		label: 'Daily Forecast 16 days',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarFill /> },
			{ three: <BsStarHalf />  },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
	{
		id: 12,
		title: 'By ZIP code',
		text: `Please note if country is not specified then the
    search works for USA as a default.`,
		label: 'Daily Forecast 16 days',
		icon: [
			{ one: <BsStarFill /> },
			{ two: <BsStarHalf /> },
			{ three: <BsStar/> },
			{ four: <BsStar/> },
			{ five: <BsStar/> },
		],
	},
];

export default Data;
