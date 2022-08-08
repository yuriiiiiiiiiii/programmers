function solution(s) {
  let stackSize = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stackSize++;
    else if (s[i] === ")") {
      if (stackSize === 0) return false;
      else stackSize--;
    }
  }

  if (stackSize === 0) return true;
  else return false;
}
