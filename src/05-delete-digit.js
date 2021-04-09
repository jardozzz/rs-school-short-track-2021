/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const k = (`${n}`).split('').map((e) => Number(e));
  const z = k.findIndex((e, i) => k[i] < k[i + 1]);
  if (z > -1) {
    k.splice(z, 1);
  } else {
    k.splice(k.length - 1, 1);
  }
  return +k.join('');
}
module.exports = deleteDigit;
