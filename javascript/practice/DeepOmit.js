function deepOmit(obj, keyToRemove) {
  if (Array.isArray(obj)) {
    return obj.map(item => deepOmit(item, keyToRemove));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (key === keyToRemove) {
        return acc; // Skip the key to remove
      }
      acc[key] = deepOmit(value, keyToRemove);
      return acc;
    }, {});
  }
  return obj; // Return the value if it's neither an object nor an array
}
