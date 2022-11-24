import 'normalize.css';
import './style.css';
import '@zekumoru-dev/svg-loader/SvgLoader';
import { format } from 'date-fns';
import Weather from './scripts/Weather';
import CurrentWeatherDisplay from './scripts/CurrentWeatherDisplay';
import CardsDisplay from './scripts/CardsDisplay';
import Card from './scripts/Card';

const city = document.querySelector('#city');
const hourlyDisplay = new CardsDisplay(document.querySelector('#hourly-weather > .cards'));
const dailyDisplay = new CardsDisplay(document.querySelector('#daily-weather > .cards'));

window.addEventListener('DOMSvgLoaded', async () => {
  const search = document.querySelector('.search');
  search.addEventListener('click', () => submit());

  city.value = 'London';
  search.click();
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
    setCurrentWeatherDisplay(weather);
    setHourlyWeatherDisplay(weather);
  }
  catch (error) {
    city.setCustomValidity(error.message);
    city.reportValidity();
    throw new Error(error);
  }
}

async function setCurrentWeatherDisplay(weather) {
  const currentWeather = weather.current_weather;
  const currentIndex = weather.hourly.time.indexOf(currentWeather.time);
  const currentTime = new Date(currentWeather.time);
  const daytime = currentTime.getHours() >= 6 && currentTime.getHours() <= 18;
  CurrentWeatherDisplay.set({
    icon: await Weather.getIcon(currentWeather.weathercode, daytime),
    currentHour: format(currentTime, 'p'),
    temperature: currentWeather.temperature,
    feelsLike: weather.hourly.apparent_temperature[currentIndex],
    precipitation: weather.hourly.precipitation[currentIndex],
    humidity: weather.hourly.relativehumidity_2m[currentIndex],
    wind: currentWeather.windspeed,
  });
}

async function setHourlyWeatherDisplay(weather) {
  const { time, weathercode, precipitation } = weather.hourly;
  const temperature = weather.hourly.temperature_2m;

  const cards = [];
  const startIndex = weather.hourly.time.indexOf(weather.current_weather.time);
  for (let i = 0; i < 24; i++) {
    const index = startIndex + i;

    cards.push((async () => {
      const t = new Date(time[index]);
      const icon = await Weather.getIcon(weathercode[index]);
      icon.setAttribute('class', 'weather-icon');

      const card = new Card(icon, format(t, 'p'), null);
      await Promise.all([
        card.addTemperature(temperature[index]),
        card.addPrecipitation(precipitation[index]),
      ]);

      return card;
    })());
  }

  hourlyDisplay.render(await Promise.all(cards));
}
