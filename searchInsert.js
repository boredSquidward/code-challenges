function searchInsert(nums, target) {
  if (nums.includes(target)) return nums.indexOf(target);
  else {
    const biggerNumber = nums.find((num) => {
      if (num > target) {
        return num;
      }
    });

    if (biggerNumber === undefined) {
      const smallerNumbers = nums.filter((num) => {
        if (num < target) return num;
      });

      return smallerNumbers.length;
    } else return nums.indexOf(biggerNumber);
  }
}

const nums = [1, 2, 5, 6];
const target = 0;

console.log(searchInsert(nums, target));
