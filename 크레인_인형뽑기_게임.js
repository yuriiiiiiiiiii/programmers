function solution(board, moves) {
  let answer = 0;
  let basket = [];

  moves.forEach((m) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][m - 1] !== 0) {
        if (basket[basket.length - 1] === board[i][m - 1]) {
          basket.pop();
          answer += 2;
          board[i][m - 1] = 0;
        } else {
          basket.push(board[i][m - 1]);
          board[i][m - 1] = 0;
        }
        break;
      }
    }
  });

  return answer;
}
