// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let o_string = "palindrome", p_string = "";
for (let i = o_string.length - 1; i >= 0; i--) {
    p_string += o_string[i];
}
console.log(o_string + p_string);
