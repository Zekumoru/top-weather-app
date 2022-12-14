const display = {};
export default display;

const info = document.querySelector('#current-weather-display');
const elements = {
  currentHour: info.querySelector('.current-hour'),
  temperature: info.querySelector('.temperature > .number'),
  feelsLike: info.querySelector('.feels-like > .number'),
  precipitation: info.querySelector('.precipitation'),
  humidity: info.querySelector('.humidity'),
  wind: info.querySelector('.wind'),
};

const degrees = info.querySelector('.degrees');
const celsiusButton = degrees.querySelector('button.celsius');
const fahrenheitButton = degrees.querySelector('button.fahrenheit');

let temperatureUnit = 'celsius';
Object.defineProperty(display, 'temperatureUnit', {
  get() {
    return temperatureUnit;
  },
});

celsiusButton.addEventListener('click', () => changeDegree(celsiusButton, 'celsius'));
fahrenheitButton.addEventListener('click', () => changeDegree(fahrenheitButton, 'fahrenheit'));

function changeDegree(button, degree) {
  const previousSelected = degrees.querySelector('.selected');
  if (previousSelected === button) return;

  previousSelected.classList.remove('selected');
  button.classList.add('selected');
  temperatureUnit = degree;

  if (typeof display.onChangeDegree === 'function') {
    display.onChangeDegree(degree);
  }
}

window.addEventListener('fetchWeather', () => {
  celsiusButton.disabled = true;
  fahrenheitButton.disabled = true;
});

window.addEventListener('finishFetchWeather', () => {
  celsiusButton.disabled = false;
  fahrenheitButton.disabled = false;
});

window.addEventListener('DOMSvgLoaded', () => {
  let icon = info.querySelector('.weather-icon');

  Object.defineProperty(display, 'icon', {
    get() {
      return icon;
    },
    set(svg) {
      icon.insertAdjacentElement('beforebegin', svg);
      icon.remove();
      icon = svg;
    },
  });
});

Object.keys(elements).forEach((key) => {
  const element = elements[key];
  Object.defineProperty(display, key, {
    get() {
      return element.textContent;
    },
    set(value) {
      element.textContent = value;
    },
  });
});

display.set = function (params = {}) {
  Object.entries(params).forEach(([param, value]) => {
    if (!display[param]) throw new SyntaxError(`Invalid display element '${param}'`);
    display[param] = value;
  });
};

display.showLoading = function () {
  const icon = document.createElement('svg');
  icon.setAttribute('class', 'weather-icon skeleton');
  display.icon = icon;
  display.currentHour = '--:--';
  display.temperature = '--';
  display.feelsLike = '-';
  display.precipitation = '-';
  display.humidity = '-';
  display.wind = '-';
};
