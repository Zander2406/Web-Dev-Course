function nice(name) {
    console.log("Hey" + name + "you're nice");
    console.log("Hey" + name + "you're good");
    console.log("Hey" + name + "your tshirt is nice");
}

nice("Harry")
nice("Rohan")

function sum(a, b, c = 3) {
    // console.log(a + b);
    return a + b + c;
}

// sum(3, 5);

let result = sum(3);
let result2 = sum(3, 5, 9);
console.log("The sum is: ", result);
console.log("The sum is: ", result2);

const func1 = (x)=>{
    console.log("Arrow Function", x)
}

func1(34);
func1(66);
func1(84);



// console.log("This is a test statement");