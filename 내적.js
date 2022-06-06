function solution(a, b) {
  let answer = a.reduce((acc, cur, idx) => acc + a[idx] * b[idx], 0);

  return answer;
}
