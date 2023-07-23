function telephoneCheck(str) {
  const arr = str.split("");
  const regEx = /\D/g;

  str.replace(regEx, "");

  arr.forEach((element) => {});

  return true;
}

telephoneCheck("555-555-5555");
