import axios from 'axios';

export default {
  async load(url, attrs = {}) {
    const svg = createSvg(await extractSvg(url));
    Object.keys(attrs).forEach((key) => svg.setAttribute(key, attrs[key]));
    return svg;
  },
};

const imgs = document.querySelectorAll('img[data-svg-url]');
[...imgs].forEach(async (img) => {
  let url = simplifyPath(img.dataset.svgUrl);
  if (!url.endsWith('.svg')) url += '.svg';

  const svg = createSvg(await extractSvg(url));
  if (img.id) svg.setAttribute('id', img.id);
  if (img.className) svg.setAttribute('class', img.className);

  img.insertAdjacentElement('beforebegin', svg);
  img.remove();
});

function createSvg(content) {
  const container = document.createElement('div');
  container.innerHTML = content;
  const svg = container.querySelector('svg');
  container.insertAdjacentElement('beforebegin', svg);
  container.remove();
  return svg;
}

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
