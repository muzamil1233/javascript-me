function capitalizeWords(sentence) {
   return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}

//For the purpose of user debugging.
console.log(capitalizeWords("hello world"));
module.exports = capitalizeWords