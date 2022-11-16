import '@mdi/font/css/materialdesignicons.css';
import axios from 'axios';
import 'normalize.css';
import './style.css';
import API_KEYS from './.api-keys.json';

async function getWeather(city) {
  const { lat, lon } = await getCityCoord(city);
  const weather = (await axios.get('https://api.open-meteo.com/v1/forecast', {
    params: {
      latitude: lat,
      longitude: lon,
      hourly: 'temperature_2m',
      timezone: 'auto',
    },
  })).data;
  return weather;
}

async function getCityCoord(city) {
  const { data } = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
    params: {
      q: city,
      appid: API_KEYS.openweathermap,
    },
  });
  return data[0];
}

getWeather('Milan');
