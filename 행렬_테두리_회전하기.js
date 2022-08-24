function solution(rows, columns, queries) {
  let result = [];

  let matrix = Array.from(Array(rows), () => Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = i * columns + j + 1;
    }
  }

  for (let q = 0; q < queries.length; q++) {
    // queries[q] = [2, 2, 5, 4]
    const [r1, c1, r2, c2] = [
      queries[q][0] - 1,
      queries[q][1] - 1,
      queries[q][2] - 1,
      queries[q][3] - 1,
    ];

    // 테두리 요소 저장하고 가장 작은 수 찾기
    let queue = [];
    for (let i = c1; i <= c2; i++) queue.push(matrix[r1][i]);
    for (let i = r1 + 1; i <= r2; i++) queue.push(matrix[i][c2]);
    for (let i = c2 - 1; i >= c1; i--) queue.push(matrix[r2][i]);
    for (let i = r2 - 1; i > r1; i--) queue.push(matrix[i][c1]);
    result.push(Math.min(...queue));

    // 맨 뒤 요소 맨 앞으로 옮기고 행렬에 회전한 수 적용
    queue.unshift(queue.pop());
    for (let i = c1; i <= c2; i++) matrix[r1][i] = queue.shift();
    for (let i = r1 + 1; i <= r2; i++) matrix[i][c2] = queue.shift();
    for (let i = c2 - 1; i >= c1; i--) matrix[r2][i] = queue.shift();
    for (let i = r2 - 1; i > r1; i--) matrix[i][c1] = queue.shift();
  }

  return result;
}
