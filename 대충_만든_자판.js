function solution(keymap, targets) {
  let result = Array(targets.length).fill(0);

  for (let ti = 0; ti < targets.length; ti++) {
    for (let tj = 0; tj < targets[ti].length; tj++) {
      let temp = Number.MAX_SAFE_INTEGER;
      for (let ki = 0; ki < keymap.length; ki++) {
        for (let kj = 0; kj < keymap[ki].length; kj++) {
          if (keymap[ki][kj] === targets[ti][tj] && temp > kj + 1) {
            temp = kj + 1;
            break;
          }
        }
      }
      if (temp === Number.MAX_SAFE_INTEGER) {
        result[ti] = -1;
        break;
      } else result[ti] += temp;
    }
  }

  return result;
}
