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

window.addEventListener('DOMSvgLoaded', async () => {
  let icon = info.querySelector('.weather-icon');

  Object.defineProperty(display, 'icon', {
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