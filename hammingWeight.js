/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function (n) {
  return n.toString(2).split("0").join("").length;
};

const n = 000000011101;

hammingWeight(n);
// console.log();
