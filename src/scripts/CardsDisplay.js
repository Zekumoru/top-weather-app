export default class {
  #viewport;
  #content;

  constructor(viewport, content) {
    this.#viewport = viewport;
    this.#content = content;
  }

  get viewport() {
    return this.#viewport;
  }

  get content() {
    return this.#content;
  }

  append(card) {
    const li = document.createElement('li');

    li.appendChild(card.icon);
    li.insertAdjacentHTML('beforeend', '<p class="time"></p>');
    li.querySelector('.time').textContent = card.time;
    li.appendChild(card.infoList);

    this.#content.appendChild(li);
  }

  render(cards) {
    this.clear();
    cards.forEach(this.append.bind(this));
  }

  clear() {
    this.#content.innerHTML = '';
  }

  showLoading() {
    const li = document.createElement('li');
    li.innerHTML = `
      <svg class="weather-icon skeleton" />
      <p class="day"><span class="skeleton"></span></p>
      <ul class="info">
        <li><span class="skeleton"></span></li>
        <li><span class="skeleton"></span></li>
      </ul>`;

    this.#content.innerHTML = '';

    const content = this.#content.cloneNode();
    content.style = '';
    this.#content.insertAdjacentElement('beforebegin', content);
    this.#content.remove();
    this.#content = content;

    for (let i = 0; i < 10; i++) {
      this.#content.appendChild(li.cloneNode(true));
    }
  }
}
