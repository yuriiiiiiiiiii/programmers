function solution(brown, yellow) {
  // brown = 가로*2 + 세로*2 - 4  ==>  (brown + 4) / 2 = 가로 + 세로
  let wl = (brown + 4) / 2;

  for (let l = 3; l < wl; l++) {
    let w = wl - l;
    // yellow = (가로-2) * (세로-2)
    if ((w - 2) * (l - 2) === yellow) return [w, l];
  }
}
