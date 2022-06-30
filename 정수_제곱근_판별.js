function solution(n) {
  return Number.isInteger(Math.sqrt(n)) === true
    ? Math.pow(Math.sqrt(n) + 1, 2)
    : -1;
}
