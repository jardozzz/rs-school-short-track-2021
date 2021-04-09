/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// eslint-disable-next-line no-unused-vars
function minesweeper(matrix) {
  let count = 0;
  const b = matrix.map((e) => e.map(() => 0));
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i - 1]) {
        if (matrix[i - 1][j - 1]) {
          count += 1;
        }
        if (matrix[i - 1][j]) {
          count += 1;
        }
        if (matrix[i - 1][j + 1]) {
          count += 1;
        }
      }
      if (matrix[i + 1]) {
        if (matrix[i + 1][j - 1]) {
          count += 1;
        }
        if (matrix[i + 1][j]) {
          count += 1;
        }
        if (matrix[i + 1][j + 1]) {
          count += 1;
        }
      }
      if (matrix[i][j - 1]) {
        count += 1;
      }
      if (matrix[i][j + 1]) {
        count += 1;
      }

      b[i][j] = count;

      count = 0;
    }
  }
  return b;
}

module.exports = minesweeper;
