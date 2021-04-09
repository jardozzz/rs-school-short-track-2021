/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let a = domains.map((e) => e.split('.')).map((e) => e.map((q) => `.${q}`).reverse());
  const b = {};
  for (let i = 0; i < a.length; i += 1) {
    for (let j = 1; j < a[i].length; j += 1) {
      a[i][j] = a[i][j - 1] + a[i][j];
    }
  }

  a = a.flat();
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] in b) {
      b[a[i]] += 1;
    } else {
      b[a[i]] = 1;
    }
  }
  return b;
}
module.exports = getDNSStats;
