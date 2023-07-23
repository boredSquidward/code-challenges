function rot13(str) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let output = "";
  const arr = str.split("");

  arr.forEach((letter) => {
    const index = alphabet.indexOf(letter);

    if (index === -1) output += letter;
    else if (index + 13 > 25) {
      output += alphabet[index - 13];
    } else {
      output += alphabet[index + 13];
    }
  });

  return output;
}

console.log(rot13("SERR CVMMN!"));
