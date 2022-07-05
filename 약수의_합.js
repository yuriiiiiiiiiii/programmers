function solution(n) {
  let result = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i !== i) result += i + n / i;
      else result += i; // 100(n)의 약수 10(i)인 경우
    }
  }

  return result;
}
