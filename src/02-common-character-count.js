/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const k = s1.split('');
  let s = 0;
  for (let i = 0; i < s2.length; i += 1) {
    if (k.indexOf(s2[i]) !== -1) {
      s += 1;
      k.splice(k.indexOf(s2[i]), 1);
    }
  }
  return s;
}

module.exports = getCommonCharacterCount;
