import 'normalize.css';
import './style.css';
import '@zekumoru-dev/svg-loader/SvgLoader';
import { format } from 'date-fns';
import ScrollBooster from 'scrollbooster';
import Weather from './scripts/Weather';
import CurrentWeatherDisplay from './scripts/CurrentWeatherDisplay';
import CardsDisplay from './scripts/CardsDisplay';
import Card from './scripts/Card';

const city = document.querySelector('#city');
const hourlyDisplay = new CardsDisplay(document.querySelector('#hourly-weather'), document.querySelector('#hourly-weather > .cards'));
const dailyDisplay = new CardsDisplay(document.querySelector('#daily-weather'), document.querySelector('#daily-weather > .cards'));
let loading = false;

hourlyDisplay.showLoading();
dailyDisplay.showLoading();

CurrentWeatherDisplay.onChangeDegree = submit;

window.addEventListener('DOMSvgLoaded', async () => {
  await Card.loadIcons();

  const search = document.querySelector('.search');
  search.addEventListener('click', () => submit());

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
  if (loading) return;
  if (!city.value) {
    city.setCustomValidity('Please enter a city!');
    city.reportValidity();
    return;
  }

  city.disabled = true;
  loading = true;
  city.dispatchEvent(new Event('fetchWeather', { bubbles: true }));
  CurrentWeatherDisplay.showLoading();
  hourlyDisplay.showLoading();
  dailyDisplay.showLoading();

  try {
    const weather = await Weather.get(city.value, {
      temperature_unit: CurrentWeatherDisplay.temperatureUnit,
    });

    await Promise.all([
      setCurrentWeatherDisplay(weather),
      setHourlyWeatherDisplay(weather),
      setDailyWeatherDisplay(weather),
    ]);
  }
  catch (error) {
    city.setCustomValidity(error.message);
    city.reportValidity();
    throw new Error(error);
  }

  city.disabled = false;
  loading = false;
  city.dispatchEvent(new Event('finishFetchWeather', { bubbles: true }));
}

async function setCurrentWeatherDisplay(weather) {
  const currentWeather = weather.current_weather;
  const currentIndex = weather.hourly.time.indexOf(currentWeather.time);
  const currentTime = new Date(currentWeather.time);

  CurrentWeatherDisplay.set({
    icon: await Weather.getIcon(currentWeather.weathercode, isDaytime(currentTime)),
    currentHour: format(currentTime, 'p'),
    temperature: currentWeather.temperature,
    feelsLike: weather.hourly.apparent_temperature[currentIndex],
    precipitation: weather.hourly.precipitation[currentIndex],
    humidity: weather.hourly.relativehumidity_2m[currentIndex],
    wind: currentWeather.windspeed,
  });

  CurrentWeatherDisplay.icon.setAttribute('class', 'weather-icon');
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
      const icon = await Weather.getIcon(weathercode[index], isDaytime(t));
      icon.setAttribute('class', 'weather-icon');

      const card = new Card(icon, format(t, 'p'), null);
      card.addTemperature(temperature[index]);
      card.addPrecipitation(precipitation[index]);

      return card;
    })());
  }

  hourlyDisplay.render(await Promise.all(cards));
  new ScrollBooster({
    viewport: hourlyDisplay.viewport,
    content: hourlyDisplay.content,
    scrollMode: 'transform',
    direction: 'horizontal',
    emulateScroll: true,
  });
}

async function setDailyWeatherDisplay(weather) {
  const { time, weathercode } = weather.daily;
  const highTemperature = weather.daily.temperature_2m_max;
  const lowTemperature = weather.daily.temperature_2m_min;
  const precipitation = weather.daily.precipitation_sum;

  const cards = [];
  time.forEach((time, index) => {
    time = new Date(time);
    cards.push((async () => {
      const icon = await Weather.getIcon(weathercode[index]);
      icon.setAttribute('class', 'weather-icon');

      const card = new Card(icon, format(time, 'eee'), null);
      card.addHighLowTemperature(highTemperature[index], lowTemperature[index]);
      card.addPrecipitation(precipitation[index]);

      return card;
    })());
  });

  dailyDisplay.render(await Promise.all(cards));
  new ScrollBooster({
    viewport: dailyDisplay.viewport,
    content: dailyDisplay.content,
    scrollMode: 'transform',
    direction: 'horizontal',
    emulateScroll: true,
  });
}

function isDaytime(time) {
  return time.getHours() >= 6 && time.getHours() < 18;
}
