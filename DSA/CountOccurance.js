// problem is to find the occurance of a char in a string ;
function countOccurance(Str , char){
  let count = 0;
  for(let i=0;i<= Str.length; i++){
      if(Str[i] === char){
          count++
      }
  }
  return count;
}
const result = countOccurance("hello" , "l");
console.log(result);


//2nd method
function countOccurance(Str,char){
    //   console.log(Str.split(""))
     return (Str.split(char).length-1);
}

  
result = countOccurance("hello" , "l");
 console.log(result)