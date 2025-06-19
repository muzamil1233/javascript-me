function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const sortedstr1 = str1.split("").sort().join("");
    const sortedstr2 = str2.split("").sort().join("")

    return sortedstr1 === sortedstr2
}

//For the purpose of user debugging.
console.log(isAnagram("listen", "silent"));
module.exports = isAnagram