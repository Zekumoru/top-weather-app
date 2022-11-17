export default class SvgLoader {
  static #VALID_FILE_NAME_REGEX = /[\w\-. ]+/g;

  static getSvgs(requireContext) {
    return requireContext.keys().reduce((obj, key) => {
      if (!key.endsWith('.svg')) return obj;
      obj[SvgLoader.generateKey(key)] = requireContext(key);
      return obj;
    }, {});
  }

  static generateKey(key) {
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
}
