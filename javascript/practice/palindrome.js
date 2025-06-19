function validatePalindrome(str) {
    const reverse = str.split("").reverse().join("");
    return str === reverse;
}

//For the purpose of user debugging.
console.log(validatePalindrome("race a car"));

module.exports = validatePalindrome