type IsEvenType = {
  (num: number): boolean;
};

const isEven: IsEvenType = (num) => num % 2 === 0;

console.log(isEven(12));
