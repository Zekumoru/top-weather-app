import SvgLoader from '@zekumoru-dev/svg-loader/SvgLoader';

export default class {
  icon;
  time;
  infoList;

  constructor(icon, time) {
    this.icon = icon;
    this.time = time;
    this.infoList = document.createElement('ul');
    this.infoList.className = 'info';
  }

  async addTemperature(temperature) {
    const li = await this.#createInfo('images/temperature.svg', '<span class="temperature"><span class="number"></span><span class="unit">°</span></span>');
    li.querySelector('.number').textContent = temperature;
    this.infoList.insertAdjacentElement('afterbegin', li);
  }

  async addHighLowTemperature(high, low) {
    const li = await this.#createInfo('images/temperature.svg', '<span class="high-temperature"><span class="number">13</span><span class="unit">°</span></span> <span class="low-temperature"><span class="number">8</span><span class="unit">°</span></span>');
    li.querySelector('.high-temperature .number').textContent = Math.floor(high);
    li.querySelector('.low-temperature .number').textContent = Math.floor(low);
    this.infoList.insertAdjacentElement('afterbegin', li);
  }

  async addPrecipitation(precipitation) {
    const li = await this.#createInfo('images/precipitation.svg', '<span class="precipitation">0.2</span> <span class="unit">mm</span>');
    li.querySelector('.precipitation').textContent = precipitation;
    this.infoList.insertAdjacentElement('beforeend', li);
  }

  async #createInfo(iconPath, content) {
    const li = document.createElement('li');
    const icon = await SvgLoader.load(iconPath, { colorable: true, class: 'icon' });
    li.appendChild(icon);
    li.insertAdjacentHTML('beforeend', content);
    return li;
  }
}
