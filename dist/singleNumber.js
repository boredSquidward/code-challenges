"use strict";
function singleNumber(nums) {
    let result = nums[0];
    if (nums.length === 1)
        return result;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            i++;
        }
        else if (nums[i] === nums[i - 1]) {
            i++;
        }
        else
            return (result = nums[i]);
    }
    return result;
}
const nums = [4, 1, 2, 1, 2];
singleNumber(nums);
