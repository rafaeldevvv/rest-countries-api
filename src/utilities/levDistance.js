// levenshtein distance
export default function levDistance(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    throw new Error("levDistance expects strings as arguments");
  }

  const string1Length = string1.length;
  const string2Length = string2.length;

  // creates matrix
  const matrix = new Array(string1Length + 1);
  for (let i = 0; i <= string1Length; i++) {
    /* populates matrix like:
    [
      [0, empty x n],
      [1, empty x n],
      [2, empty x n],
      [3, empty x n],
      [4, empty x n],
      [5, empty x n],
    ]
    */
    matrix[i] = new Array(string2Length + 1);
    matrix[i][0] = i;
  }

  for (let j = 0; j <= string2Length; j++) {
    /*
    populates the first element of the matrix(first row) like:
    [
      [0,1,2,3,4 ...]
    ]
    */
    matrix[0][j] = j;
  }

  for (let i = 1; i <= string1Length; i++) {
    for (let j = 1; j <= string2Length; j++) {
      // populates the whole matrix reusing the result of previous calculations
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (string1[i - 1] !== string2[j - 1] ? 1 : 0)
      );
    }
  }

  // returns last element of the matrix(last row, last column), which is the levenshtein distance
  return matrix[string1Length][string2Length];
}