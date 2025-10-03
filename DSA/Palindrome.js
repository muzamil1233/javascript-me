function isPalindrome(str){
    const formatstr = str.toLowerCase().replace(/[^a-z0-9]/g , "");
    const reverseStr = formatstr.split("").reverse().join("");
    return formatstr === reverseStr;
}
const result = isPalindrome("mom");
console.log(result)