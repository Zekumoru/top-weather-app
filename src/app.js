import 'normalize.css';
import './style.css';
import '@zekumoru-dev/svg-loader/SvgLoader';
import Weather from './scripts/Weather';

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
    console.log(weather);
  }
  catch (error) {
    city.setCustomValidity(error.message);
    city.reportValidity();
    console.error(error);
  }
}
