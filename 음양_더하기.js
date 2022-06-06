function solution(absolutes, signs) {
  return signs.reduce((acc, cur, idx) => {
    if (cur === true) return acc + absolutes[idx];
    else return acc - absolutes[idx];
  }, 0);
}
