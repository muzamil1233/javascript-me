function reverseWords(sentence) {
    const reverse = sentence.split("").reverse().join("");
    return reverse;
}

//For the purpose of user debugging.
console.log(reverseWords("Hello World"));

module.exports = reverseWords