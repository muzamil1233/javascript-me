function flattenArray(arr) {
  return arr.reduce((accumulator, value) => {
    return accumulator.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, []);
}

// Example usage:
const nestedArray = [1, [2, [3, [4, 5]]]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]
