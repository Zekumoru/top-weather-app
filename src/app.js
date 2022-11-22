import axios from 'axios';
import 'normalize.css';
import './style.css';
import '@zekumoru-dev/svg-loader/SvgLoader';
import API_KEYS from './.api-keys.json';

const city = document.querySelector('#city');

window.addEventListener('DOMSvgLoaded', () => {
  const search = document.querySelector('.search');
  search.addEventListener('click', () => submit());
});

city.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') e.preventDefault();
});

city.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    submit();
    return;
  }

  if (!city.value) {
    city.setCustomValidity('Please enter a city!');
    return;
  }

  city.setCustomValidity('');
});

async function submit() {
  if (!city.value) {
    city.setCustomValidity('Please enter a city!');
    city.reportValidity();
    return;
  }

  try {
    const weather = await getWeather(city.value);
    console.log(weather);
  }
  catch (error) {
    city.setCustomValidity(error.message);
    city.reportValidity();
    console.error(error);
  }
}

async function getWeather(city) {
  const { lat, lon } = await getCityCoord(city);
  const weather = (await axios.get('https://api.open-meteo.com/v1/forecast', {
    params: {
      latitude: lat,
      longitude: lon,
      current_weather: true,
      timezone: 'auto',
      hourly: [
        'apparent_temperature',
        'temperature_2m',
        'precipitation',
        'weathercode',
      ],
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
  if (!data.length) throw new Error('City not found!');
  return data[0];
}
