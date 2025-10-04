
// here in this problem we have to iterate over an array and  if it is divisible by 3 
// then print fizz even y 5 then print bizz or if bith 5 and 3 then print fizzbuzz

function fizzBuzzrr(num) {
    const arr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("fizzbuzz");
        } else if (i % 3 === 0) {
            arr.push("fizz");
        } else if (i % 5 === 0) {
            arr.push("buzz");
        } else {
            arr.push(i);
        }
    }
    return arr; // return should be inside function
}

const result = fizzBuzzrr(15);
console.log(result);
