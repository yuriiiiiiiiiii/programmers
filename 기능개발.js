function solution(progresses, speeds) {
  let days = []; // 각 기능의 남은 작업 기간
  for (let i = 0; i < progresses.length; i++) {
    days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }

  let result = [];
  let index = 0;
  let standard = days.shift(); // 비교할 작업 기간
  result[0] = 1;
  while (days.length !== 0) {
    if (days.length === 0) break;

    if (standard >= days[0]) {
      // 이번 배포 작업 개수 증가
      result[index]++;
      days.shift();
    } else {
      // 다음번 배포 작업 개수 세러 넘어가기
      result[++index] = 1;
      standard = days.shift();
    }
  }

  return result;
}
