function solution(new_id) {
  new_id = new_id
    .toLowerCase() // 1단계
    .replace(/[^\w-_.]/g, "") // 2단계
    .replace(/\.{2,}/g, ".") // 3단계
    .replace(/^\.|\.$/g, "") // 4단계
    .replace(/^$/, "a") // 5단계
    .slice(0, 15)
    .replace(/\.$/, ""); // 6단계
  while (new_id.length <= 2) new_id += new_id[new_id.length - 1]; // 7단계

  return new_id;
}
