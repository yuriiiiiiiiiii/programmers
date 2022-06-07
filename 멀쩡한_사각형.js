function solution(w, h) {
  const gcd = (a, b) => {
    if (a % b === 0) return b; // 나머지가 0이면 작은 수가 최대공약수
    else return gcd(b, a % b);
  };

  let g = w > h ? gcd(w, h) : gcd(h, w);

  return w * h - (w / g + h / g - 1) * g;
}
