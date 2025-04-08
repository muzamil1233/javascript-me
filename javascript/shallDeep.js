//a shallow copy creates a new Object, but it only copies the references to the nested objects, not the actual nested objects themselves 



// const original = {
//     name : "muzamil" ,
//     address :{
//         city : "srinager"
//     }
// };
// const shallowCopy = {...original};
// shallowCopy.address.city = "delhi"
// console.log(original )

// deep copy creates completely independent copy of the original object and al of its nested structures 
//means every level of its objects hieracrchy is duplicated not just the top level


const original = {
    name : "muzamil" ,
    address :{
        city : "srinager"
    }
};
const deepcopy = JSON.parse(JSON.stringify(original))
deepcopy.address.city = "delhi";
console.log(original.address.city)// srinager 
// JSON.parse(JSON.stringify(...)) creates a completely new copy, including all nested data.



///
// Think of shallow copy as copying someone's home address—you both now point to the same place.
// But deep copy is like building a brand new house that looks the same—now you live in totally separate places.

