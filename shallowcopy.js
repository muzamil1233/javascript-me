// SHALLOW COPY

//    shallow copy is when you copy some object through object.assign OR SPread operator,
//    in both these cases top level properties are copied but nested objected are passed as refrences ;
var obj = {
    name : "muzamil",
    age :21,
    address : {
        
        city : "sopore"
    }
}

var obj2 = {...obj}
console.log(obj); //op : 
// name : "muzamil",
// age :21,
// address : {
    
//     city : "sopore"
// }
console.log(obj2);
// name : "muzamil",
//     age :21,
//     address : {
        
//         city : "sopore"
//     }


//but if we change


obj2.address.city = "baramulla"
console.log(obj.address.city) //op: baramulla
console.log(obj2.address.city) //op : baramulla

  
