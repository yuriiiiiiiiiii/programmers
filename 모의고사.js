function solution(answers) {
  var answer = [];

  let person = {
    n1: { pattern: [1, 2, 3, 4, 5], index: 0, count: 0 },
    n2: { pattern: [2, 1, 2, 3, 2, 4, 2, 5], index: 0, count: 0 },
    n3: { pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], index: 0, count: 0 },
  };

  for (let i = 0; i < answers.length; i++) {
    for (let n in person) {
      if (answers[i] === person[n].pattern[person[n].index]) person[n].count++;
      person[n].index++;
      if (person[n].index === person[n].pattern.length) person[n].index = 0;
    }
  }

  let max = Math.max(person.n1.count, person.n2.count, person.n3.count);
  if (max === person.n1.count) answer.push(1);
  if (max === person.n2.count) answer.push(2);
  if (max === person.n3.count) answer.push(3);

  return answer;
}
