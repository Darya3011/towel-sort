


module.exports = function towelSort(matrix) {
  let res = [];
  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          res.push(matrix[i][j])
        }
      } else {
        for (let r = matrix[i].length - 1; r >= 0; r--) {
          res.push(matrix[i][r]);
        }
      }
    }
  }
  return res;
}

