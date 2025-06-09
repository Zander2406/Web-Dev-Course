console.log("Test");

// let boxes = document.getElementsByClassName("box");

// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red";

// This only returns the first element that has the css selector specified
// document.querySelector(".box").style.backgroundColor = "green";

// But this will return a collection of all the elements that share that class
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "green";
});

console.log(document.getElementsByTagName("div"));

let e = document.getElementsByTagName("div");
console.log(e[5].matches("#redbox"));
console.log(e[3].matches("#redbox"));
console.log(e[3].closest("html"));

console.log(document.querySelector(".container").contains(e[2]));
console.log(document.querySelector(".container").contains(e[0]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
