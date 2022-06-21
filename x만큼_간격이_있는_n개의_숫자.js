function solution(x, n) {
  let answer = [];
  let initial = x;
  for (let i = 0; i < n; i++) {
    answer.push(x);
    x += initial;
  }
  return answer;
}
