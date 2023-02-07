const removeDuplicates = (nums) => {
  let countAddedNumbers = 0;
  let previousElement;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      previousElement = nums[i];
    }

    if (nums[i] === previousElement && i !== 0) {
      nums.push(nums[nums.length - 1] + 1);
      countAddedNumbers++;
      nums.splice(i, 1);
      i--;
    }

    if (nums[i] !== previousElement) {
      if (i + 1 === nums.length) {
        return nums.length - countAddedNumbers;
      } else {
        previousElement = nums[i];
      }
    }
  }
};

const nums = [1, 1];

console.log(removeDuplicates(nums));
