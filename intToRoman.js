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
    if (newArr[i] === 0) newArr.shift();
    if (newArr[i] >= 1000) {
      output += "M";
      newArr[i] -= 1000;
      i--;
      continue;
    } else if (newArr[i] >= 500) {
      output += "D";
      newArr[i] -= 500;
      i--;
    } else if (newArr[i] >= 100) {
      output += "C";
      newArr[i] -= 100;
      i--;
    } else if (newArr[i] >= 50) {
      output += "L";
      newArr[i] -= 50;
      i--;
    } else if (newArr[i] >= 10) {
      output += "X";
      newArr[i] -= 10;
      i--;
    } else if (newArr[i] >= 5) {
      output += "V";
      newArr[i] -= 5;
      i--;
    } else {
      output += "I";
      newArr[i] -= 1;
      i--;
    }
  }

  return output;
}

//XII
//MMXXIII

convertToRoman(119);
