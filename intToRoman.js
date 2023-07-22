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

  let output = "";
  const str = num.toString();
  const arr = str.split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i] * Math.pow(10, i);
  }

  const newArr = arr.reverse();

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 0) i++;
    if (newArr[i] >= 1000) {
      output += "M";
      newArr[i] -= 1000;
      i--;
      continue;
    } else if (newArr[i] >= 500) {
      output += "D";
      newArr[i] -= "D";
      i--;
    } else if (newArr[i] >= 100) {
      output += "C";
      newArr[i] -= "C";
      i--;
    } else if (newArr[i] >= 50) {
    } else if (newArr[i] >= 10) {
    } else if (newArr[i] >= 5) {
    } else {
    }
  }

  return output;
}

//XII
//MMXXIII

convertToRoman(1119);
