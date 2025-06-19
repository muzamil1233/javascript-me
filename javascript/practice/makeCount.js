function makeCounter(initialValue = 0) {
  let count = initialValue;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function () {
      count = initialValue;
      return count;
    }
  };
}

const counter = makeCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.increment()); // Output: 7
console.log(counter.decrement()); // Output: 6
console.log(counter.reset());     // Output: 5

module.exports = makeCounter;