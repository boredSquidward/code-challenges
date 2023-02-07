function sumTwoSmallestNumbers(numbers) {
  const sortedNums = numbers.sort((a, b) => a - b);

  return sortedNums[0] + sortedNums[1];
}

const numbers = [1, 2, 3, 4];

console.log(sumTwoSmallestNumbers(numbers));
