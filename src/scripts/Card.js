import SvgLoader from '@zekumoru-dev/svg-loader/SvgLoader';

export default class Card {
  static #TEMPERATURE_ICON;
  static #PRECIPITATION_ICON;

  icon;
  time;
  infoList;

  constructor(icon, time) {
    this.icon = icon;
    this.time = time;
    this.infoList = document.createElement('ul');
    this.infoList.className = 'info';
  }

  static async loadIcons() {
    if (Card.#TEMPERATURE_ICON) return;
    Card.#TEMPERATURE_ICON = await SvgLoader.load('images/temperature.svg', { colorable: true, class: 'icon' });
    Card.#PRECIPITATION_ICON = await SvgLoader.load('images/precipitation.svg', { colorable: true, class: 'icon' });
  }

  addTemperature(temperature) {
    const li = this.#createInfo(Card.#TEMPERATURE_ICON, '<span class="temperature"><span class="number"></span><span class="unit">°</span></span>');
    li.querySelector('.number').textContent = temperature;
    this.infoList.insertAdjacentElement('afterbegin', li);
  }

  addHighLowTemperature(high, low) {
    const li = this.#createInfo(Card.#TEMPERATURE_ICON, '<span class="high-temperature"><span class="number">13</span><span class="unit">°</span></span> <span class="low-temperature"><span class="number">8</span><span class="unit">°</span></span>');
    li.querySelector('.high-temperature .number').textContent = Math.floor(high);
    li.querySelector('.low-temperature .number').textContent = Math.floor(low);
    this.infoList.insertAdjacentElement('afterbegin', li);
  }

  addPrecipitation(precipitation) {
    const li = this.#createInfo(Card.#PRECIPITATION_ICON, '<span class="precipitation">0.2</span> <span class="unit">mm</span>');
    li.querySelector('.precipitation').textContent = precipitation;
    this.infoList.insertAdjacentElement('beforeend', li);
  }

  #createInfo(icon, content) {
    const li = document.createElement('li');
    li.appendChild(icon.cloneNode(true));
    li.insertAdjacentHTML('beforeend', content);
    return li;
  }
}
