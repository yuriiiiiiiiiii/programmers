function solution(dartResult) {
  let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let beforeNum = 0;
  let presentNum = 0;
  let sum = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (arr.includes(dartResult[i])) {
      // 점수 처리
      if (presentNum === 1 && dartResult[i] === "0") presentNum = 10;
      else presentNum = parseInt(dartResult[i]);
    } else {
      // 보너스 옵션 처리
      if (dartResult[i] === "D") presentNum = Math.pow(presentNum, 2);
      else if (dartResult[i] === "T") presentNum = Math.pow(presentNum, 3);
      if (dartResult[i] === "*") {
        presentNum = presentNum * 2;
        sum += beforeNum;
      } else if (dartResult[i] === "#") presentNum = -presentNum;

      if (arr.includes(dartResult[i + 1]) || i === dartResult.length - 1) {
        // 더해주기
        sum += presentNum;
        beforeNum = presentNum;
      }
    }
  }

  return sum;
}
