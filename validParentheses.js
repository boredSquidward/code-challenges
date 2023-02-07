/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (/{|\[|\(/.test(s[i])) {
      stack.push(s[i]);

      continue;
    } else if (/}/.test(s[i]) && /{/.test(stack[stack.length - 1])) {
      stack.pop();

      continue;
    } else if (/]/.test(s[i]) && /\[/.test(stack[stack.length - 1])) {
      stack.pop();

      continue;
    } else if (/\)/.test(s[i]) && /\(/.test(stack[stack.length - 1])) {
      stack.pop();

      continue;
    } else {
      return false;
    }
  }

  return /\[|{|\(|\)|}|]/g.test(s) && stack.length === 0;
};

const s = "[](){}";

console.log(isValid(s));
