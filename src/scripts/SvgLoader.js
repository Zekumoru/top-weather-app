import axios from 'axios';

export default class SvgLoader {
  static #VALID_FILE_NAME_REGEX = /[\w\-. ]+/g;

  static async loadSvgs(document, svgs) {
    await Promise.resolve(); // force asynchronous
    const imgs = document.querySelectorAll('img[data-svg-load]');
    [...imgs].forEach((img) => {
      const container = document.createElement('div');
      container.innerHTML = svgs[img.dataset.svgLoad];

      const svg = container.querySelector('svg');
      if (img.id) svg.setAttribute('id', img.id);
      if (img.className) svg.setAttribute('class', img.className);

      img.insertAdjacentElement('beforebegin', svg);
      container.remove();
      img.remove();
    });
  }

  static async getSvgs(requireContext) {
    await Promise.resolve(); // force asynchronous
    return requireContext.keys().reduce(async (obj, key) => {
      if (!key.endsWith('.svg')) return obj;
      obj[SvgLoader.#generateKey(key)] = await SvgLoader.#extractSvg(requireContext(key));
      return obj;
    }, {});
  }

  static #generateKey(key) {
    const parts = [...key.matchAll(SvgLoader.#VALID_FILE_NAME_REGEX)];
    const generated = [];
    let isFirstLoop = true;
    for (let i = parts.length - 1; i > 0; i--) {
      let part = parts[i][0];
      if (isFirstLoop) {
        part = part.substring(0, part.lastIndexOf('.svg'));
        isFirstLoop = false;
      }
      generated.push(part);
    }
    if (generated.length === 1) return generated[0];
    return generated.join('-');
  }

  static async #extractSvg(url) {
    const { data } = await axios.get(url);
    return /<svg(.|\s)*<\/svg>/.exec(data)[0];
  }
}
