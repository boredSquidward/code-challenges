function climbStairs(n: number): number {
  let fibo = [0, 1];

  if (n === 0) return fibo[0];
  if (n === 1) return fibo[1];

  for (let i = 2; i <= n + 1; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }

  return fibo[n + 1];
}

console.log(climbStairs(4));
