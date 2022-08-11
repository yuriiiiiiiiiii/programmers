function solution(genres, plays) {
  let result = [];

  let music = {};
  let genreSum = {};
  for (let i = 0; i < genres.length; i++) {
    if (!music[genres[i]]) {
      music[genres[i]] = [[i, plays[i]]];
      genreSum[genres[i]] = plays[i];
    } else {
      music[genres[i]].push([i, plays[i]]);
      genreSum[genres[i]] += plays[i];
    }
  }

  for (let i in music) {
    music[i].sort((a, b) => b[1] - a[1]); // 장르 내 정렬
  }
  console.log(music);

  let genreSumkeys = [];
  for (let key in genreSum) genreSumkeys.push(key);
  genreSumkeys.sort((a, b) => genreSum[b] - genreSum[a]); // 장르 별 정렬
  console.log(genreSum);
  console.log(genreSumkeys);

  for (let i = 0; i < genreSumkeys.length; i++) {
    result.push(music[genreSumkeys[i]][0][0]); // 특정 장르의 곡이 하나일 경우 여기서 끝
    if (music[genreSumkeys[i]][1]) result.push(music[genreSumkeys[i]][1][0]); // 곡이 두개 이상일 경우
  }

  return result;
}
