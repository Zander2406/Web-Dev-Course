console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".box").innerHTML);



console.log(document.querySelector(".container").outerHTML);


console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);




console.log(document.querySelector(".container").textContent);


console.log(document.querySelector(".container").hidden);


// document.querySelector(".container").hidden = true;
// console.log(document.querySelector(".container").hidden);

document.querySelector(".box").innerHTML = "Hey I am Harry";

console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style", "display: inline;"));
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").removeAttribute("style"));


console.log(document.querySelector(".box").dataset);


let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>I have been inserted by Harry</b>"
div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);


let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterbegin", "<b> I am under the water. Please help me here too much raining</b>")

console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);

document.querySelector(".container").classList.add("harry");


document.querySelector(".container").classList.toggle("red");



