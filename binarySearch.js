/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else return -1;
};
