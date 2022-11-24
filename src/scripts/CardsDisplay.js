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
}
