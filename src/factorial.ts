const factorial = (num: number) => {
  if (num < 0) return -1;

  let result: number = num;

  for (let i = num - 1; i >= 1; i--) {
    result = result * i;
  }

  return result;
};

console.log(factorial(1));
