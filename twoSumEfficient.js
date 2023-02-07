//hashMap
// time complexity: O(n)
// space complexity: O(n)

const twoSum_efficient = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    const complementPair = target - value;

    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
};

const nums = [2, 1, 3];
const target = 4;

console.log(twoSum(nums, target));
