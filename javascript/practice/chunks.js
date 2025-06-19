function chunkArray(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i += n){
       result.push(arr.slice(i , i+n))
    }
    return result;

}

//For the purpose of user debugging.
//pass your array and chunk size in function call
const arr = [1,2,3,4,5,6,4,3,9]
console.log(chunkArray(arr, 3));
module.exports = chunkArray





/////// 2


function chunkArray(arr, size) {
  const result = [];
  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }
  return result;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunked = chunkArray(array, 3);
console.log(chunked); // Output: [[1,2,3],[4,5,6],[7,8,9]]
