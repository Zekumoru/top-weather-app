import 'normalize.css';
import './style.css';
import '@zekumoru-dev/svg-loader/SvgLoader';
import { format } from 'date-fns';
import Weather from './scripts/Weather';
import CurrentWeatherDisplay from './scripts/CurrentWeatherDisplay';

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
    const weather = await Weather.get(city.value);
    const currentWeather = weather.current_weather;
    const currentIndex = weather.hourly.time.indexOf(currentWeather.time);
    CurrentWeatherDisplay.set({
      currentHour: format(new Date(currentWeather.time), 'p'),
      temperature: currentWeather.temperature,
      feelsLike: weather.hourly.apparent_temperature[currentIndex],
      precipitation: weather.hourly.precipitation[currentIndex],
      humidity: weather.hourly.relativehumidity_2m[currentIndex],
      wind: currentWeather.windspeed,
    });
  }
  catch (error) {
    city.setCustomValidity(error.message);
    city.reportValidity();
    throw new Error(error);
  }
}
