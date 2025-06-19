function countVowels(str) {
    const vowel = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowel.includes(char)) {
            count++;
        }
    }
    return count;
}

//For the purpose of user debugging.
console.log(countVowels("JavaScript"));

module.exports = countVowelsm