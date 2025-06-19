function findMaxNumber(arr) {
    return Math.max(...arr);
}

//For the purpose of user debugging.
console.log(findMaxNumber([1, 2, 3, 4, 5]));

module.exports = findMaxNumber
///
///

function findMaxNumber(arr) {
    return arr.reduce((max, curr)=> (curr > max ? curr : max ), arr[0])
}

//For the purpose of user debugging.
console.log(findMaxNumber([1, 2, 3, 4, 5]));

module.exports = findMaxNumber

////// 3
function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example usage:
const numbers = [22, 65, 1, 39];
console.log(findMax(numbers)); // Output: 65
