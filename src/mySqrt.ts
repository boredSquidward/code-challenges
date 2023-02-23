/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x: number): number {
  let root: number = 0;

  const nums = separateInputByTwo(x);

  for (let i = 0; i < nums.length; i++) {
    let num: number = Number.parseInt(nums[i]);

    const nearestSqrVal = nearestSqrNum(num);
  }

  console.log(nums);

  return root;
};

function separateInputByTwo(x: number) {
  const str: string = x.toString();
  const nums: string[] = [];

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i - 1] !== undefined) {
      nums.push(str[i - 1] + str[i]);
      i--;
    } else {
      nums.push(str[i]);
    }
  }

  return nums;
}

function nearestSqrNum(num: number): number {
  for (let n = 1; n <= 9; n++) {
    const sqr1: number = n * n;
    const sqr2: number = (n + 1) * (n + 1);

    if (sqr1 <= num && sqr2) return n;
  }

  return 1;
}

const x = 11108;
mySqrt(x);
