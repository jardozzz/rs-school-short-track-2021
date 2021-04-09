/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const a = str.split('');
  const b = [];
  let j = 1;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i - 1] !== a[i]) {
      b.push(a[i]);
      j = 1;
    } else {
      j += 1;
      b[b.length - 1] = `${j}${a[i]}`;
    }
  }
  return b.join('');
}

module.exports = encodeLine;
