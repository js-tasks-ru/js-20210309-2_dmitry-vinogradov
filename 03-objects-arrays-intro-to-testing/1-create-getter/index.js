/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const tree = path.split('.');

  return function(obj) {
    let prop = obj;
    for (const branch of tree) {
      prop = prop[branch];
      if (!prop) {
        break;
      }
    }
    return prop;
  };
}
