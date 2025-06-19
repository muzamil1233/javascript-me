function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let seen = new Set();

    for (let end = 0; end < s.length; end++){
        while (seen.has(s[end])) {
            seen.delete(s[start]);
            start++;
        }

        seen.add(s[end])
         maxLength = Math.max(maxLength , end - start + 1);
        
      
    }
    return maxLength;
}

//For the purpose of user debugging.
console.log(lengthOfLongestSubstring("abcabcbb"));

module.exports = lengthOfLongestSubstring