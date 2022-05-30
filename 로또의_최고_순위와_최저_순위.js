function solution(lottos, win_nums) {
  var answer = [];
  let same = lottos.filter((n) => win_nums.includes(n)).length;
  let zero = lottos.filter((n) => n === 0).length;
  same + zero === 0 ? answer.push(6) : answer.push(7 - (same + zero));
  same === 0 ? answer.push(6) : answer.push(7 - same);

  return answer;
}
