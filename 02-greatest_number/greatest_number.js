// define an arrow function that return the maximum between 3 random numbers
const greatestNumber = (number1, number2, number3) => {
    // use a conditional statement inside the function to understand wich number is the greatest one
    if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3) {
        return number2;
    } else {
        return number3;
    }
}
// declare 3 variables and assign random numbers to them
let number1 = Math.ceil(Math.random() * 10);
let number2 = Math.ceil(Math.random() * 10);
let number3 = Math.ceil(Math.random() * 10);
console.log(number1, number2, number3);
// call the function passing the numbers as arguments
console.log(`${greatestNumber(number1, number2, number3)} is the greatest number`) //call the function inside the ${...}