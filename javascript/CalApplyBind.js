// call() in JavaScript

// Invokes the function immediately

// When you use call, the function runs right away.

// Lets you choose the this context

// The first argument to call is what this will refer to inside the function.

// Accepts arguments individually

// After the thisArg, you pass the function arguments one by one



const person= {
    name : "muzamil"
}

function greeting(age, city){
    console.log(`hello i am ${this.name} ${age} years old  from ${city}`)
}
greeting.call(person , 24, "sopore") // hello i am muzamil 24  years old from spore 


// apply do the same as call but it passes arguments as an array 

const person2= {
    name : "muzamil"
}

function greeting(age, city){
    console.log(`hello i am ${this.name} ${age} years old from ${city}`)
}
greeting.apply(person2 , [24, "sopore"])


//Bind 

// bind() in JavaScript

// Does NOT execute the function immediately

// Instead, it returns a new function that you can call later.

// Lets you set the this context

// The first argument you pass to bind becomes the this inside the function.

// Can preset arguments (partial application)

// You can “lock in” some arguments when creating the bound function.
const person3= {
    name : "gazi"
}
function greeting(age, city){
    console.log(`hello i am ${this.name} ${age} years old from ${city}`)
}
const getName = greeting.bind(person3,25 );
getName("shopain")
