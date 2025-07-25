// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


// In this regex the ^ character tests the string from the beginning, the $ tests the string from the end and /i flag removes case sensitivity
let regex = /^[aeiou]$/i;

let test_string = "B";

if (regex.test(test_string)) {
    console.log(true);
}
else {
    console.log(false);
}