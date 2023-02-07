var isPalindrome = function (x) {
  const num = x.toString();

  for (let i = 0; i < Math.floor(num.length / 2); i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const x = 232302;

console.log(isPalindrome(x));
