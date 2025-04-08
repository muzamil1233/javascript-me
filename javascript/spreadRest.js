// ✅ Spread Operator (...)
// Used to "spread" or expand the elements of an array or object.

// 🟡 Used when:

// Passing array elements as arguments

// Copying or merging arrays/objects

// 📌 Examples:

// Spread in arrays:


// const nums = [1, 2, 3];
// const moreNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]
// Spread in objects:

// const user = { name: 'Muzamil', age: 25 };
// const updatedUser = { ...user, city: 'Srinagar' };
// Spread in function calls:


// const arr = [1, 2, 3];
// Math.max(...arr); // 3
// ✅ Rest Operator (...)
// Used to "collect" the remaining elements into a single array or object.

// 🟡 Used when:

// Defining functions with variable number of arguments

// Collecting remaining properties in object or array destructuring

// 📌 Examples:

// Rest in function parameters:


// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b);
// }
// sum(1, 2, 3); // 6
// Rest in object destructuring:

// js
// Copy
// Edit
// const { name, ...rest } = { name: 'Muzamil', age: 25, city: 'Srinagar' };
// console.log(rest); // { age: 25, city: 'Srinagar' }
// Rest in array destructuring:

// js
// Copy
// Edit
// const [first, ...others] = [10, 20, 30];
// console.log(others); // [20, 30]
