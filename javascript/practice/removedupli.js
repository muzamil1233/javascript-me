function removeDuplicates(arr) {
  const unique = arr.filter((char ,index) => arr.indexOf(char) === index)
console.log(unique)
}
removeDuplicates([1, 2, 2, 3, 4, 4])
module.exports = removeDuplicates;