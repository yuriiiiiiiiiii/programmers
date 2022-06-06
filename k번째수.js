function solution(array, commands) {
  let answer = [];
  commands.forEach((c) => {
    const [i, j, k] = c;
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  });

  return answer;
}
