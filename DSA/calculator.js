function calculator(num1 , num2, operator){
    let result;
    switch(operator){
        case "+":
            result = num1+num2;
            break;
            case "-":
            result = num1-num2;
            break;
            case "*":
            result = num1*num2;
            break;
            case "%":
            result = num1%num2;
            break;
            deault : 
            throw new Error("invalid operatot")
    }
    return result;
}

const data = calculator(9 , 12, "+");
console.log(data)



//2nd method
function calculator(num1, num2, operator) {
  let result;
  
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "%") {
    result = num1 % num2;
  } else {
    throw new Error("Invalid operator");
  }
  
  return result;
}

// Call the function
const result =calculator(6, 7, "+");
console.log(result); // 13

