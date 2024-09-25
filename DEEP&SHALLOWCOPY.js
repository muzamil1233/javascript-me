//Deep copy and shallow copy

var obj = {
    name :"muzamil",
    id:2
}
var obj2 = obj;
console.log(obj)    // op : muzamil
console.log(obj2)    //op : muzamil

obj2.name = "muskan"
console.log(obj)    // op : muskan because obj2 is refrenced towards obj so whatever change is happening in obj2 is automatically happen in obj
console.log(obj2)  // op : muskan

// in obj2 objects are not copied but obj2 is refrenced towards obj 
// so it means obj is not presnt in obj2 
// if we change obj2.name = "muskan" it will change in both obj and obj2 bcx obj2 is refrenced towards obj 

// now real copy of obj in obj2
var obj = {
    name :"muzamil",
    
}
var obj2 = {...obj}
 console.log(obj)    // op : muzamil
console.log(obj2)    //op : muzamil

obj2.name = "muskan"
console.log(obj)    // op : muzamil
console.log(obj2)  // op : muskan

   // SHALLOW COPY

//    shallow copy is when you copy some object through object.assign OR SPread operator,
//    in both these cases top level properties are copied but nested objected are passed as refrences 
