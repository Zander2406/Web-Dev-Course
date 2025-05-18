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


let random = Math.random();
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}