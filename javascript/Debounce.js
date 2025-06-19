function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId); // clear previous timer
      timeoutId = setTimeout(() => {
        func.apply(this, args); // run function after delay  
      }, delay);
    };
  }
  
  // Example usage:
  const logInput = debounce(function (e) {
    console.log('User stopped typing:', e.target.value);
  }, 1000);
  
  document.getElementById('myInput').addEventListener('input', logInput);
  // Every time the user types, the timer resets.

// Only after 1 second of no typing, it prints the input value.

// Great for search bars or input fields.
  