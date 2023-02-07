function XO(str) {
  let numberOfXs = 0;

  let numberOfOs = 0;

  // console.log(/x|X/g.lastIndex(str));

  for (let index = 0; index < str.length; index++) {
    const char = str[index];

    if (char === "x" || char === "X") {
      numberOfXs++;
    }

    if (char === "o" || char === "O") {
      numberOfOs++;
    }
  }

  return numberOfOs === numberOfXs;
}

const str = "asdfxqw4ro;ljXasdfihOhjhoj";

console.log(XO(str));
