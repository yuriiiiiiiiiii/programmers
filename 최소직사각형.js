function solution(sizes) {
  let big = [];
  let small = [];

  sizes.forEach((e) => {
    if (e[0] > e[1]) {
      big.push(e[0]);
      small.push(e[1]);
    } else {
      big.push(e[1]);
      small.push(e[0]);
    }
  });

  return Math.max(...big) * Math.max(...small);
}
