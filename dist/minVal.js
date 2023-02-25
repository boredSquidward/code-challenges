"use strict";
const minVal = (nums) => nums.sort((a, b) => a - b)[0];
const nums = [2, 4, 502, 1293, 123, -1, 84, 921];
console.log(minVal(nums));
