const lengthOfLastWord = (s) => {
  const last = s.split(" ");

  const filteredWords = last.filter((word) => {
    if (word !== " ") return word;
  });

  const lastWord = filteredWords[filteredWords.length - 1];

  return lastWord.length;
};

const s = "   Hello World";

lengthOfLastWord(s);
