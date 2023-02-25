"use strict";
const isPrime = (val) => {
    if (val === 1)
        return true;
    if (val < 0)
        return false;
    for (let i = 2; i < Math.sqrt(val); i++) {
        if (val % i === 0)
            return false;
    }
    return true;
};
