import axios from 'axios';

export default {
  async load(url) {
    await Promise.resolve(); // force asynchronous
    if (!url.endsWith('/')) url += '/';
    const imgs = document.querySelectorAll('img[data-svg-load]');
    [...imgs].forEach(async (img) => {
      url += simplifyPath(img.dataset.svgLoad);
      if (!url.endsWith('.svg')) url += '.svg';

      const container = document.createElement('div');

      try {
        container.innerHTML = await extractSvg(url);
      }
      catch (error) {
        return;
      }

      const svg = container.querySelector('svg');
      if (img.id) svg.setAttribute('id', img.id);
      if (img.className) svg.setAttribute('class', img.className);

      img.insertAdjacentElement('beforebegin', svg);
      container.remove();
      img.remove();
    });
  },
};

function simplifyPath(path) {
  if (path.startsWith('./') || path.startsWith('/')) {
    const slash = path.indexOf('/');
    path = path.substring(slash + 1);
  }
  if (path.endsWith('.svg')) {
    const ext = path.lastIndexOf('.svg');
    path = path.substring(0, ext);
  }
  return path;
}

async function extractSvg(url) {
  const { data } = await axios.get(url);
  return /<svg(.|\s)*<\/svg>/.exec(data)[0];
}
