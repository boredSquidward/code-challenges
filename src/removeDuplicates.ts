function removeDuplicates(nums: number[]): number {
  const length: number | undefined = nums.length;
  let counter: number = 0;

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
