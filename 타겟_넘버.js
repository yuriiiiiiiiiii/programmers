function solution(numbers, target) {
  let count = 0; // 방법의 수
  let value = 0; // 계산 값

  const dfs = (number, index, value) => {
    value += number;
    // 목적지인지 체크
    if (value === target && index === numbers.length - 1) count++;
    // 아니면 계속 순회
    if (index + 1 < numbers.length) {
      dfs(numbers[index + 1], index + 1, value);
      dfs(-numbers[index + 1], index + 1, value);
    }
  };

  dfs(numbers[0], 0, 0);
  dfs(-numbers[0], 0, 0);

  return count;
}
