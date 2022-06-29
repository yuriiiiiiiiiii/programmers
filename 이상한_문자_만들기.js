function solution(s) {
  let answer = "";
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      index = 0;
    } else {
      if (index % 2 === 0) answer += s.charAt(i).toUpperCase();
      else answer += s.charAt(i).toLowerCase();
      index++;
    }
  }
  return answer;
}
