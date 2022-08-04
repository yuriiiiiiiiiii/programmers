function solution(maps) {
  let n = maps.length - 1;
  let m = maps[0].length - 1;
  let mr = [1, -1, 0, 0];
  let mc = [0, 0, 1, -1];

  /* bfs */
  let queue = [[0, 0, 1]];
  while (queue.length) {
    // 1. 큐에서 꺼내옴
    let [currentR, currentC, dis] = queue.shift();
    // 2. 목적지인가?
    if (currentR === n && currentC === m) {
      return dis;
    }
    // 3. 연결된 곳을 순회
    for (let i = 0; i < 4; i++) {
      let tr = currentR + mr[i];
      let tc = currentC + mc[i];
      // 4. 갈 수 있는가?
      if (tr < 0 || n < tr || tc < 0 || m < tc) continue; // map 밖이 아니고
      if (maps[tr][tc] === 0) continue; // 벽이 아니면
      // 5. 체크인
      maps[tr][tc] = 0;
      // 6. 큐에 넣음
      queue.push([tr, tc, dis + 1]);
    }
  }
  return -1;

  /* dfs 시간 초과 
  let minDis = Number. MAX_VALUE;
  let distance = Array.from(Array(n+1), () => Array(m+1).fill(0));
  
  const dfs = (currentR, currentC) => {
      // 1. 체크인
      maps[currentR][currentC] = 0;
      // 2. 목적지인가?
      if (currentR === n && currentC === m) {
          minDis = Math.min(minDis, distance[currentR][currentC]);
      }
      // 3. 연결된 곳을 순회 -> 상하좌우
      for (let i = 0; i < 4; i++) {
          let tr = currentR + mr[i];
          let tc = currentC + mc[i];
          // 4. 갈 수 있는가? -> map 안인가, 길인가
          if (0 <= tr && tr <= n && 0 <= tc && tc <= m && maps[tr][tc] === 1) { 
              distance[tr][tc] = distance[currentR][currentC] + 1;
              // 5. 간다
              dfs(tr, tc);
          }
      }
      // 6. 체크아웃
      maps[currentR][currentC] = 1;
  }
  
  distance[0][0] = 1; // 첫 번째 칸도 센다
  dfs(0, 0); // 길 찾기
  if (distance[n][m] === 0) return -1;
  else return minDis;
  */
}
