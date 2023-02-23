"use strict";
function fib(n) {
    let fibo = [0, 1];
    if (n === 0)
        return fibo[0];
    if (n === 1)
        return fibo[1];
    for (let i = 2; i <= n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo[n];
}
