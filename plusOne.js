const plusOne = (digits) => {
  let num = digits.join("");

  if (+num < Number.MAX_SAFE_INTEGER) {
    num = +num + 1;

    return num.toString().split("");
  } else {
    let bigInt = BigInt(num) + BigInt(1);

    return bigInt.toString().split("");
  }
};

const big = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const small = [9];

console.log(plusOne(big));
