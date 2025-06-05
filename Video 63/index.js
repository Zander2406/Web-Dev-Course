let arr = [1, 2, 3, 4, 5, 7];

// console.log(arr, typeof arr);
// console.log(arr.length);
// console.log(arr[0]);

console.log(arr.toString());

console.log(arr.join(" and "))

arr.pop();

arr.push(100);

console.log(arr.shift());

console.log(arr.unshift("Test"));

console.log(arr);

delete arr[1];

console.log(arr);

console.log(arr.splice(1, 3, 222, 333, 444));
console.log(arr);