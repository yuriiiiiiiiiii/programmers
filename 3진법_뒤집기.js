function solution(n) {
  n = n.toString(3).split("").reverse().join("");
  n = parseInt(n, 3);
  return n;
}
/*
function solution(n) {
  let numArr = [];
  const convert3 = (x) => {
    let s = Math.floor(x / 3);
    let r = x - s * 3;
    numArr.unshift(r);
    if (s >= 3) {
      return convert3(s, 3);
    } else {
      if (s !== 0) numArr.unshift(s);
      return numArr;
    }
  };

  const convert10 = (y) => {
    let m = 1;
    let result = 0;
    y.forEach((e) => {
      result += e * m;
      m *= 3;
    });
    return result;
  };

  return convert10(convert3(n));
}
*/
