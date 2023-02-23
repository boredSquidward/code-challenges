function isPalindrome(s: string): boolean {
  let string: string = s.toLowerCase().replace(/[^0-9a-z]/g, "");

  let result: string = string.split("").reverse().join("");

  if (string === result) return true;

  return false;
}

const s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
