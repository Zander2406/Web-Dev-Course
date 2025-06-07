console.log("Hello World");

console.log(document.body.childNodes[1]);

// All spaces and new line characters are considered as text nodes on childnodes list
console.log(document.body.childNodes[1]);

// To ignore text nodes nodes and get the first element node that we have in a selection we can use

console.log(document.body.firstElementChild);

document.body.childNodes[1].lastElementChild.style.color = "red";
document.body.childNodes[1].lastElementChild.style.backgroundColor = "green";


// We can access the parent of an element using this as well
document.body.childNodes[1].lastElementChild.style.backgroundColor.parentElement;

// We get the child nodes for the element
console.log(document.body.firstElementChild.childNodes);

// We can get just the html elements using this
console.log(document.body.firstElementChild.children);


// We can get just the html elements using this
console.log(document.body.firstElementChild.children[3].nextElementSibling);

// We get the previous html element node
console.log(document.body.firstElementChild.children[3].previousElementSibling);

// We can get the previous node before our selection
console.log(document.body.firstElementChild.children[3].previousSibling);

console.log(document.body.children[1]);

console.log(document.body.children[1].rows);

console.log(typeof document);
console.log(typeof window);


