function solution(s) {
  // 집합의 모든 요소를 풀어 늘어놓기
  s = s.replace(/[^\w,]/g, "").split(",");

  // 키는 요소 자체, 값은 요소의 개수로 객체 생성
  let o = {};
  s.forEach((e) => {
    if (!o[e]) o[e] = 1;
    else o[e] = o[e] + 1;
  });

  // 객체를 배열로 push하고, 요소의 개수 기준 내림차순 정렬
  let a = [];
  for (let i in o) {
    a.push([i, o[i]]);
  }
  a = a.sort((x, y) => y[1] - x[1]);

  // 정렬된 요소들을 순서대로 정답 배열에 추가
  let result = [];
  for (let i in a) {
    result.push(parseInt(a[i][0]));
  }

  return result;
}
