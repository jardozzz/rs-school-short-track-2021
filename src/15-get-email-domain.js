/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reg = /[@][^@]{1,}[.][a-z]+$/;
  const found = email.match(reg);
  return found[0].slice(1, found[0].length);
}

module.exports = getEmailDomain;
