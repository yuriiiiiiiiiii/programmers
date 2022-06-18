function solution(arr1, arr2) {
  let r = arr1.length;
  let c = arr1[0].length;
  let matrix = Array.from(Array(r), () => Array(c));

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      matrix[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return matrix;
}
