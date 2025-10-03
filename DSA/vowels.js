function vowels(str){
    const formatstr = str.toLowerCase();
   let count =0;
    for(let i =  0; i <formatstr.length; i++){
        const char = formatstr[i];
        if("aeiou".includes(char)){
            count++;
        }
    }
    return count;
   
}
const result =  vowels("mom");
console.log(result)


//2nd method
function vowels(str){
    const formatstr = str.toLowerCase();
    let count =0;
    for(let i =  0; i <formatstr.length; i++){
        const char = formatstr[i];
        if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u" ){
            count++
        }
    }
    return count;
   
}
const data = vowels("mother");
console.log(result)