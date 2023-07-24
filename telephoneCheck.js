function telephoneCheck(str) {
  const regEx =
    /^(\+?1)?(\s|\-)?((\((\d{3})\))|(\d{3}))(\s|\-)?(\d{3})(\s|\-)?(\d{4})$/g;
  return regEx.test(str);
}

console.log(telephoneCheck("2 (757) 622-7382"));
