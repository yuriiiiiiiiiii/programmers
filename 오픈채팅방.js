function solution(record) {
  let answer = [];
  let userInfo = {}; // { uid1234: 'Prodo', uid4567: 'Ryan' }

  // userInfo를 업데이트 시켜주고
  record.forEach((e) => {
    let eArr = e.split(" ");
    if (eArr[0] === "Enter") userInfo[eArr[1]] = eArr[2];
    else if (eArr[0] === "Change") userInfo[eArr[1]] = eArr[2];
  });

  // 결과 메세지를 얻어낸다
  record.forEach((e) => {
    let eArr = e.split(" ");
    if (eArr[0] === "Enter")
      answer.push(`${userInfo[eArr[1]]}님이 들어왔습니다.`);
    else if (eArr[0] === "Leave")
      answer.push(`${userInfo[eArr[1]]}님이 나갔습니다.`);
  });

  return answer;
}
