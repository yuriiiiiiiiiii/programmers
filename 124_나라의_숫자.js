function solution(n) {
  let answer = "";

  const trans = (n) => {
    let s = Math.floor(n / 3); // 몫
    let r = n - 3 * s; // 나머지

    if (r === 0) {
      s -= 1;
      r = 4;
    }

    if (s > 3) {
      answer = r.toString() + answer;

      return trans(s);
    } else {
      if (s === 3) s = 4;

      s === 0
        ? (answer = r.toString() + answer)
        : (answer = s.toString() + r.toString() + answer);

      return answer;
    }
  };

  return trans(n);
}

/*
10 41 // s3 r1
11 42 // s3 r2
12 44 // s4 r0 -> s3 r3
13 111 // s4 r1
14 112 // s4 r2
15 114 // s5 r0 -> s4 r3
*/
