function rot13(str) {
  const alphabet = [
    " ",
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

  const arr = str.split("");
  console.log(arr);

  arr.forEach((letter) => {
    const index = alphabet.indexOf(letter);
    console.log(index);

    // for (let i = 0; i < 13; i++) {}
  });
  return str;
}

rot13("ABC PBQR PNZC");
