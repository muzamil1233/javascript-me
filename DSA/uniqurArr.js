function uniqueArray(arr){
   const uniquearr = [];
    for(let i =0; i < arr.length; i++ ){
        if(! uniquearr.includes(arr[i])){
             uniquearr.push(arr[i])
        }
    }
    return uniquearr
    
   
}
const result =  uniqueArray(["mother", "mother", "sum", "sum"]);
console.log(result)