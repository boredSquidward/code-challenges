/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  const str = x.toString();

  const nums = [];

  let result = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i - 1] !== undefined) {
      nums.push(str[i - 1] + str[i]);
      i--;
    } else {
      nums.push(str[i]);
    }
  }

  for (const num of nums) {
    
  }
};

const x = 11108;
mySqrt(x);
