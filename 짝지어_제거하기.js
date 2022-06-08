function solution(s) {
  let arr = [s[0]]; // s가 baabaa인 경우 -> [b], [b, a], [b], [], [a], []

  for (let i = 1; i < s.length; i++) {
    if (arr[arr.length - 1] === s[i]) arr.pop();
    else arr.push(s[i]);
  }

  return arr.length === 0 ? 1 : 0;
}
