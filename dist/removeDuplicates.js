"use strict";
function removeDuplicates(nums) {
    const length = nums.length;
    let counter = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i - 1] === nums[i + 1]) {
            nums.splice(i, 1);
            counter++;
            i--;
        }
    }
    return nums.length + counter;
}
const nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
