const romanToInt = (s) => {
  let result = 0;
  const roman = {
    I: 1,
    II: 2,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  for (let i = s.length - 1; i >= 0; i--) {
    if (roman[s[i - 1] + s[i]] !== undefined) {
      result += roman[s[i - 1] + s[i]];
      i--;
    } else {
      result += roman[s[i]];
    }
  }
  return result;
};

const s = "MCMXCIV";

console.log(romanToInt(s));
