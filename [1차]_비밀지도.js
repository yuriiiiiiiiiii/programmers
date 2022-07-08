function solution(n, arr1, arr2) {
  let result = [];

  for (let i = 0; i < n; i++) {
    // 2진수로 변환
    let num1 = arr1[i].toString(2);
    num1 = "0".repeat(n - num1.length) + num1;
    let num2 = arr2[i].toString(2);
    num2 = "0".repeat(n - num2.length) + num2;

    // 비교
    let str = "";
    for (let j = 0; j < n; j++) {
      if (num1[j] === "0" && num2[j] === "0") str += " ";
      else str += "#";
    }
    result.push(str);
  }

  return result;
}
