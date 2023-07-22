function convertToRoman(num) {
  let output = "";
  const str = num.toString();
  const arr = str.split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i] * Math.pow(10, i);
  }

  const newArr = arr.reverse();

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 0) {
      newArr.shift();
      i--;
    } else if (newArr[i] >= 1000) {
      output += "M";
      newArr[i] -= 1000;
      i--;
    } else if (newArr[i] >= 500) {
      if (newArr[i] === 900) {
        output += "CM";
        newArr[i] -= 900;
        i--;
        continue;
      }
      output += "D";
      newArr[i] -= 500;
      i--;
    } else if (newArr[i] >= 100) {
      if (newArr[i] === 400) {
        output += "CD";
        newArr[i] -= 400;
        i--;
        continue;
      }
      output += "C";
      newArr[i] -= 100;
      i--;
    } else if (newArr[i] >= 50) {
      if (newArr[i] === 90) {
        output += "XC";
        newArr[i] -= 90;
        i--;
        continue;
      }
      output += "L";
      newArr[i] -= 50;
      i--;
    } else if (newArr[i] >= 10) {
      if (newArr[i] === 40) {
        output += "XL";
        newArr[i] -= 40;
        i--;
        continue;
      }
      output += "X";
      newArr[i] -= 10;
      i--;
    } else if (newArr[i] >= 5) {
      if (newArr[i] === 9) {
        output += "IX";
        newArr[i] -= 9;
        i--;
        continue;
      }
      output += "V";
      newArr[i] -= 5;
      i--;
    } else if (newArr[i] < 5) {
      if (newArr[i] === 4) {
        output += "IV";
        newArr[i] -= 4;
        i--;
        continue;
      }
      output += "I";
      newArr[i] -= 1;
      i--;
    }
  }

  return output;
}

//XII
//MMXXIII
console.log(convertToRoman(501));
