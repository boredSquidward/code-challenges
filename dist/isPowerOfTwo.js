"use strict";
const isPowerOfTwo = (num) => {
    if (num <= 1)
        return false;
    return (num & (num - 1)) === 0;
};
console.log(isPowerOfTwo(16));
