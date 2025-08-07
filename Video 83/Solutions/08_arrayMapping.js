// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function delayedMultiply(number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number * 2);
        }, 500)
    });
}

async function arrFn(numbers) {
    const res = await Promise.all(numbers.map(delayedMultiply));
    return res;
}

const numbers = [1, 2, 3, 4, 5];
arrFn(numbers).then(output => console.log(output));


