/* Create a faulty calculator using JavaScript
This faulty calculator does the following:

1. Take 2 inputs from the user
2. It performs wrong operations as follows:
+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operations only 10% of the time

*/


function calc(num1, num2, operator){
    let c = Math.random();
    if (c < 0.1) {
        if (operator == '+') {
            return num1 - num2;
        }
        if (operator == '-') {
            return num1 / num2;
        }
        if (operator == '*') {
            return num1 + num2;
        }
        if (operator == '/') {
            return num1 ** num2;
        }
        if (operator == '%') {
            return num1 % num2;
        }
        if (operator == '**') {
            return num1 ** num2;
        }
    }
    else {
        if (operator == '+') {
            return num1 + num2;
        }
        if (operator == '-') {
            return num1 - num2;
        }
        if (operator == '*') {
            return num1 * num2;
        }
        if (operator == '/') {
            return num1 / num2;
        }
        if (operator == '%') {
            return num1 % num2;
        }
        if (operator == '**') {
            return num1 ** num2;
        }
    }
}

const readline = require("readline-sync");

let a = Number(readline.question("Enter number 1: "));
let b = Number(readline.question("Enter number 2: "));
let o = readline.question("Enter operation: ");

let res = calc(a, b, o);

console.log(res);





