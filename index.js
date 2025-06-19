

function isPalindrome(str){
    const cleanStr = str.toLower().replace();
    return cleanStr = cleanStr.split("").reverse().join("")
}
console.log(isPalindrome(hello));



function RemoveDuplicate(arr){
    return arr.reduce((unique,item)=>{
      if(!unique.includes(item)){
        unique.push(item)
      }
      return unique
    },[])
}