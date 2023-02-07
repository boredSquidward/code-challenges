/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  if (strs[0].length === 0) {
    return "";
  }
  const shortestStr = strs.sort((a, b) => a.length - b.length)[0];

  let prefix = "";

  for (let i = 0; i < shortestStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== shortestStr[i]) {
        return prefix;
      }
    }
    prefix = prefix + shortestStr[i];
  }

  return prefix;
};

const strs = ["flavor", "flow", "flower"];

console.log(longestCommonPrefix(strs));
