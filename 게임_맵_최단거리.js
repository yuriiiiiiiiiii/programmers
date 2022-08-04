function solution(maps) {
  let minDis = Number.MAX_VALUE;
  let n = maps.length - 1;
  let m = maps[0].length - 1;
  let mr = [-1, 1, 0, 0];
  let mc = [0, 0, -1, 1];
  let visited = Array.from(Array(n), () => Array(m).fill(false));
  let distance = Array.from(Array(n), () => Array(m).fill(0));
  console.log("어이?");
  const dfs = (currentR, currentC) => {
    // 체크인
    visited[currentR][currentC] = true;
    // 목적지인가
    if (currentR === n && currentC === m) {
      console.log("도착" + currentR, currentC, distance[currentR][currentC]);
      minDis = Math.min(minDis, distance[currentR][currentC]);
    }
    // 연결된 곳을 순회 -> 상하좌우
    for (let i = 0; i < 4; i++) {
      let tr = currentR + mr[i];
      let tc = currentC + mc[i];
      console.log(tr, tc);
      // 갈수있는가 -> map 안인가, 값이 1인가, 방문전인가
      if (0 <= tr && tr <= n && 0 <= tc && tc <= m) {
        console.log("범위안");
        if (visited[tr][tc] === false) {
          console.log("방문전");
          if (maps[tr][tc] === 1) {
            console.log("갈수있");
            // 간다
            distance[tr][tc] = distance[currentR][currentC] + 1;
            console.log(distance[tr][tc]);

            dfs(tr, tc);
          }
        }
      }
    }
    // 체크아웃
    visited[currentR][currentC] = false;
  };

  dfs(0, 0);
  //console.log(distance[m][m]);
  //if (distance[m][m] === 0) return -1;
  //else return distance[m][m];
  return minDis;
}
