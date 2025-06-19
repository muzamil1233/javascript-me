function findMissingNumber(arr) {
   const n = arr.length ; // Since one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}

//For the purpose of user debugging.
console.log(findMissingNumber([3,0,1]));

module.exports = findMissingNumber