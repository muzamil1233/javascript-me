Array.prototype.myReduce = function(callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const array = this;
  const hasInitialValue = arguments.length > 1;
  let accumulator = hasInitialValue ? initialValue : array[0];
  let startIndex = hasInitialValue ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};
