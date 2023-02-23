"use strict";
function isPalindrome(s) {
    let string = s.toLowerCase().replace(/[^0-9a-z]/g, "");
    let result = string.split("").reverse().join("");
    if (string === result)
        return true;
    return false;
}
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
