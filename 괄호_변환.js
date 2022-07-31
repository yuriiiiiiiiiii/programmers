function solution(p) {
  const parentheses = (w) => {
    // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환
    if (w === "") return "";

    // 2. w를 두 "균형잡힌 괄호 문자열" u, v로 분리
    let open = 0,
      close = 0;
    let u = "",
      v = "";
    for (let i = 0; i < w.length; i++) {
      if (w[i] === "(") open++;
      else if (w[i] === ")") close++;
      if (open === close) {
        // u의 여는 괄호와 닫는 괄호의 개수가 같아지는 부분에서 자르기
        u = w.slice(0, i + 1);
        v = w.slice(i + 1);
        break;
      }
    }

    // u가 "올바른 괄호 문자열"인지 확인
    let stack = [];
    if (u[0] == "(") stack.push(u[0]);
    for (let i = 1; i < u.length; i++) {
      if (stack[stack.length - 1] == "(" && u[i] == ")") stack.pop();
      else stack.push(u[i]);
    }
    // 3. 그렇다면
    if (stack.length == 0) {
      return u + parentheses(v);
    }
    // 4. 아니라면
    else {
      u = u.slice(1, u.length - 1);
      let reverseU = "";
      for (let i = 0; i < u.length; i++) {
        if (u[i] === "(") reverseU += ")";
        else if (u[i] === ")") reverseU += "(";
      }
      return "(" + parentheses(v) + ")" + reverseU;
    }
  };

  return parentheses(p);
}
