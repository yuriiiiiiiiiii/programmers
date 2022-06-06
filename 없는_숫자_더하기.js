function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum1 = arr.reduce((sum, el) => sum + el, 0); // 0에서 9까지의 합
  let sum2 = numbers.reduce((sum, el) => sum + el, 0); // numbers 요소의 합

  return sum1 - sum2;
}
