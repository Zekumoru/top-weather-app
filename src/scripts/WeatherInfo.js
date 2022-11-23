const WeatherInfo = {};
export default WeatherInfo;

const info = document.querySelector('#weather-info');
const elements = {
  currentHour: info.querySelector('.current-hour'),
  temperature: info.querySelector('.temperature > .number'),
  feelsLike: info.querySelector('.feels-like > .number'),
  precipitation: info.querySelector('.precipitation'),
  humidity: info.querySelector('.humidity'),
  wind: info.querySelector('.wind'),
};

window.addEventListener('DOMSvgLoaded', async () => {
  let icon = info.querySelector('.weather-icon');

  Object.defineProperty(WeatherInfo, 'icon', {
    get() {
      return icon;
    },
    set(svg) {
      icon.insertAdjacentElement('beforebegin', svg);
      const className = icon.getAttribute('class');
      if (className) svg.setAttribute('class', className);
      icon.remove();
      icon = svg;
    },
  });
});

Object.keys(elements).forEach((key) => {
  const element = elements[key];
  Object.defineProperty(WeatherInfo, key, {
    get() {
      return element.textContent;
    },
    set(value) {
      element.textContent = value;
    },
  });
});
