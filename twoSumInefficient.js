// time complexity: O(nˆ2)
// space complexity: O(1)

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const nums = [2, 1, 3];
const target = 4;

console.log(twoSum(nums, target));
