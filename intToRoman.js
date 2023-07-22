function convertToRoman(num) {
  const roman = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

  const str = num.toString();
  const arr = str.split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i] * Math.pow(10, i);
  }

  console.log(arr);
}

//XII
//MMXXIII

convertToRoman(1819);
