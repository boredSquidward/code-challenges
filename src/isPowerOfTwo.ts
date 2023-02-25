type isPowerOfTwoType = {
  (num: number): boolean;
};

const isPowerOfTwo: isPowerOfTwoType = (num) => {
  if (num <= 1) return false;

  return (num & (num - 1)) === 0;
};

console.log(isPowerOfTwo(16));

//0010 => 2
//0100 => 4
//1000 => 8

//e.g
//0100 => 4
//0011 => 3
//0000 => true

//e.g
//1010 => 10
//1001 => 9
//1000 => false

