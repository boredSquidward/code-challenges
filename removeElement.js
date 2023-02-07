function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}

const nums = [1, 2, 3, 2, 4];

const val = 2;

console.log(removeElement(nums, val));
