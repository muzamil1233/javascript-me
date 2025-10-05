function validatNumber(number){
    const prefix= number.slice(0,3).join("");
     const suffix= number.slice(3,6).join("");
      const rest= number.slice(6).join("");
      
      return `(${prefix}) ${suffix}-${rest} ` 
    
}
const result = validatNumber([1,2,3,4,5,6,7,8,9,1]);
console.log(result)