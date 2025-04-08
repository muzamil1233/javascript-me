//Goal: Run a function at most once every 2 seconds, no matter how fast the user scrolls.
function throttle(func, limit) {
    let lastTime = 0;
  
    return function (...args) {
      const now = Date.now();
      if (now - lastTime >= limit) {
        func.apply(this, args); // run function
        lastTime = now;
      }
    };
  }
  
  // Example usage:
  const logScroll = throttle(function () {
    console.log('Scrolling...');
  }, 2000); // once every 2 seconds
  
  window.addEventListener('scroll', logScroll);




//   Even if you scroll quickly, it only logs once every 2 seconds.

// Useful for scroll events, resize events, button click limits, etc.
  