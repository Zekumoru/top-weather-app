import SvgLoader from '@zekumoru-dev/svg-loader/SvgLoader';
import axios from 'axios';
import API_KEYS from '../.api-keys.json';
import wmoIconConversion from './wmo-icon-conversion.json';

const Weather = {};
export default Weather;

Weather.get = async function (city, params) {
  const { lat, lon } = await getCityCoord(city);

  params = {
    latitude: lat,
    longitude: lon,
    current_weather: true,
    timezone: 'auto',
    hourly: [
      'apparent_temperature',
      'temperature_2m',
      'precipitation',
      'relativehumidity_2m',
      'weathercode',
    ],
    daily: [
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_sum',
      'weathercode',
    ],
    ...params,
  };

  return (await axios.get('https://api.open-meteo.com/v1/forecast/', { params })).data;
};

Weather.getIcon = async function (wmo, daytime = true) {
  const time = (daytime) ? 'weather-day' : 'weather-night';
  try {
    const path = `images/${time}/${wmoIconConversion[wmo].full}.svg`;
    return await SvgLoader.load(path, {
      colorable: true,
    });
  }
  catch (error) {
    if (error instanceof TypeError) {
      throw new TypeError(`Missing icon for wmo code ${wmo}`);
    }
    else {
      throw new Error(`Could not load icon with wmo code ${wmo}`);
    }
  }
};

async function getCityCoord(city) {
  const data = await (await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEYS.openweathermap}`)).json();
  if (!data.length) throw new Error('City not found!');
  return data[0];
}
