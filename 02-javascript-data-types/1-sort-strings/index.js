/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  return processSort(arr, param);

  function processSort(arrUnsorted, sortOrder) {
    return [...arrUnsorted].sort(function (a, b) {
      const result = a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
      switch (sortOrder) {
      case 'asc':
        return result;
      case 'desc':
        return -result;
      default:
        return 0;
      }
    });
  }
}
