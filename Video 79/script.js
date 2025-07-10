let a = prompt("Enter first number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);


function main() {


    let x = 1;
    try {
        console.log("The sum is ", sum * x);
        return true;
    } catch (error) {
        console.log("Error aagaya bhai");
        return false;
    }
    // The code inside finally runs regardless of there being an error or not but we use the keyword because this allows us to run the rest of the code even after a return statement has been executed in the function that contains it.
    finally {
        console.log("Files are being closed and db connection is being closed");
    }

}

let c = main();
