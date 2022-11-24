export default class {
  #display;

  constructor(display) {
    this.#display = display;
  }

  append(card) {
    const li = document.createElement('li');

    li.appendChild(card.icon);
    li.insertAdjacentHTML('beforeend', '<p class="time"></p>');
    li.querySelector('.time').textContent = card.time;
    li.appendChild(card.infoList);

    this.#display.appendChild(li);
  }

  render(cards) {
    this.clear();
    cards.forEach(this.append.bind(this));
  }

  clear() {
    this.#display.innerHTML = '';
  }
}
