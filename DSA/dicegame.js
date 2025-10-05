// Write a JavaScript program to simulate rolling two dice multiple times and determine the result based on the sum of the dice.

// Requirements:

// Create a function rollDice() that returns a random integer between 1 and 6 (inclusive).

// Create another function diceGameSimulation(numSimulation) that:

// Simulates rolling two dice, dice1 and dice2, numSimulation times.

// Calculates their sum (sum = dice1 + dice2).

// Determines the result as follows:

// If the sum is 7 or 11, the result is "win".

// If the sum is 2, 3, or 12, the result is "lose".

// Otherwise, the result is "roll again".


function rollDice(){
    return Math.floor(Math.random() * 6) + 1;

}
function diceGameSimulation(numSimulation){
    let results= [];
    for(let i =0; i < numSimulation; i++){
        const dice1 =rollDice();
        const dice2 = rollDice();
        const sum = dice1+dice2;
        let result = " "
        if(sum === 7 || sum === 11){
            result = "win"
        }else if (sum === 2|| sum === 3 || sum === 12 ){
            result = "lose"
        }else{
            result = "roll again"
        }
        results.push({dice1,dice2,sum,result}) 
    }
    return results
}
const data = diceGameSimulation(10);
console.log(data)