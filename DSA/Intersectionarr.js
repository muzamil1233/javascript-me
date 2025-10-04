// Write a function intersectionArr(arr1, arr2) that takes two arrays as input and returns a new array containing only the elements that are present in both arrays (the intersection).

// Each element in the result should be unique (no duplicates).

// The order of elements in the result should follow their order of appearance in the first array.


function intersectionArr(arr1,arr2){
    const intersectionarr = [];
    for(let i =0; i<arr1.length; i++){
        if(arr2.includes(arr1[i]) && !intersectionarr.includes(arr1[i])){
          intersectionarr.push(arr1[i])
        }
    }
    return intersectionarr
    
}

const result = intersectionArr([1,3,5,6,7] , [3,5,7,8,2,0])
console.log(result)