function solution(clothes) {
  let closet = {};
  for (let i = 0; i < clothes.length; i++) {
    let type = clothes[i][1];
    if (!closet[type]) closet[type] = [clothes[i][0]];
    else closet[type].push(clothes[i][0]);
  }

  let result = 1;
  for (let i in closet) {
    result *= closet[i].length + 1;
  }

  return result - 1;
}
