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

  CurrentWeatherDisplay.showLoading();

  try {
    const weather = await Weather.get(city.value);
    setCurrentWeatherDisplay(weather);
    setHourlyWeatherDisplay(weather);
    setDailyWeatherDisplay(weather);
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
      await Promise.all([
        card.addHighLowTemperature(highTemperature[index], lowTemperature[index]),
        card.addPrecipitation(precipitation[index]),
      ]);

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
