/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const entries = Object.entries(obj);
  let result = {};

  for (let field of fields) {
    for (let entry of entries) {
      if (field === entry[0]) {
        result[entry[0]] = entry[1];
      }
    }
  }
  return result;
};
