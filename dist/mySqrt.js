"use strict";
var mySqrt = function (x) {
    if (x === 0)
        return 0;
    if (x === 1)
        return 1;
    let right = x;
    let left = 1;
    let mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid === x)
            return mid;
        else if (mid * mid < x) {
            left = mid + 1;
        }
        else
            right = mid - 1;
    }
    return mid;
};
const x = 9;
console.log(mySqrt(x));
