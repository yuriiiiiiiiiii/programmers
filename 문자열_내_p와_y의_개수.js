function solution(s) {
  let p = s.match(/p/gi) === null ? 0 : s.match(/p/gi).length;
  let y = s.match(/y/gi) === null ? 0 : s.match(/y/gi).length;
  return p === y;
}
