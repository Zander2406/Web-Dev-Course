// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let sumSelector = function (numArray) {
    let result = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < 0) {
            return result;
        }
        result += numArray[i];
    }

    return result;
}

let testArray = [9, 2, 7, 8, 9];
console.log(sumSelector(testArray));

let testArray2 = [9, 2, -3, 7, 8, 9];
console.log(sumSelector(testArray2));


