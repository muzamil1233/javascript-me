function findMissingLetter(arr){
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const startIndex = alphabet.indexOf(arr[0]);
for(let i =0; i<  arr.length; i++){
    if(arr[i] !== alphabet[startIndex+i]){
        return alphabet[startIndex+i]
    }
}
return alphabet
}
const result = findMissingLetter("a,b,d,g")
console.log(result)