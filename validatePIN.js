function validatePIN(pin) {
  if (typeof pin !== "string") {
    return false;
  }

  const hasRegEx = /"|'|-|`|e|\+|\.| |\n|\r/.test(pin);

  if (hasRegEx) {
    return false;
  }

  if (pin.length === 4 || pin.length === 6) {
    const isSafeInteger = Number.isSafeInteger(+pin);
    const isNumber = !isNaN(pin);

    return isNumber && isSafeInteger;
  } else return false;
}

const pin = `123
`;

console.log(validatePIN(pin));
