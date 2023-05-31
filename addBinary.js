/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  const whichOneIsLonger = (firstArr, secArr) => {
    if (firstArr.length >= secArr.length) {
      return { longest: firstArr, shortest: secArr };
    } else {
      return { longest: secArr, shortest: firstArr };
    }
  };

  let remain = "0";

  let result = "";

  let { longest, shortest } = whichOneIsLonger(a, b);

  let equalized = shortest;

  for (let i = 0; i < longest.length - shortest.length; i++) {
    equalized = "0" + equalized;
  }

  for (let i = longest.length - 1; i >= 0; i--) {
    let add = +longest[i] + +equalized[i];

    if (remain === "1") {
      if (add === 2) {
        result = "1" + result;

        if (longest[i - 1] === undefined) {
          equalized = "0" + equalized;
          longest = "0" + longest;
          i += 1;
        }
      } else if (add === 1) {
        result = "0" + result;

        if (longest[i - 1] === undefined) {
          equalized = "0" + equalized;
          longest = "0" + longest;
          i += 1;
        }
      } else if (add === 0) {
        result = "1" + result;
        remain = "0";
      }
    } else if (remain === "0") {
      if (add === 2) {
        result = "0" + result;

        if (longest[i - 1] === undefined) {
          equalized = "0" + equalized;
          longest = "0" + longest;
          i += 1;
        }

        remain = "1";
      } else if (add === 1) {
        result = "1" + result;
      } else if (add === 0) {
        result = "0" + result;
      }
    }
  }

  return result;
};

const a = "101";

const b = "100";

console.log(addBinary(a, b));
