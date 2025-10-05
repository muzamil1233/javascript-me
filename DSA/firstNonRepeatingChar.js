function findFirstNonRepeatingCharacters(str){
    const charCount = {};
    for(const char of str){
        charCount[char] = (charCount[char] || 0)+1
    } // in this loop it will check how many times a value is comming
    for(const char of str){
      if(charCount[char] === 1){
          return char;
      } // in this loop it return the unique value which is appear at the first time 
      
    }
    return null;
    
}

const result =findFirstNonRepeatingCharacters("aabbccd");
console.log(result )

