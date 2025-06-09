let a = 6;

function factorial (number) {
    if (number <= 0)
    {
        return 0;
    }
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1,).reduce((a, b)=> a*b);
    return c;
}


function facFor(number) {
    if (number <= 0)
    {
        return 0;
    }
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index;
        
    }
    return fac;
}

console.log(factorial(a));
console.log(facFor(4));