function solution(s) {
  let num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < 10; i++) {
    let regex = new RegExp(num[i], "g");
    s = s.replace(regex, num.indexOf(num[i]));
  }

  return parseInt(s);
}
