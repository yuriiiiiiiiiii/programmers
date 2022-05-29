function solution(id_list, report, k) {
  let report2 = {}; // report 배열을 객체로 변환, { reportee1: [reporter1, reporter2, ...], reportee2: [reporter3, ...], ... }
  report.map((e) => {
    let key = e.split(" ")[1];
    if (report2[key]) {
      if (!report2[key].includes(e.split(" ")[0])) {
        report2[key] = [...report2[key], e.split(" ")[0]];
      } else {
      }
    } else report2[key] = [e.split(" ")[0]];
  });
  //console.log(report2);

  let reporter = []; // 완료 메일을 받은 신고자들 (중복 있음)
  for (let i in report2) {
    if (report2[i].length >= k) {
      reporter.push(...report2[i]);
    }
  }
  //console.log(reporter);

  let answer = Array(id_list.length).fill(0); // 완료 메일을 몇 번 받았는지
  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < reporter.length; j++) {
      if (id_list[i] === reporter[j]) {
        answer[i] += 1;
      }
    }
  }

  return answer;
}

//console.log(solution(	["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
