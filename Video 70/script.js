let boxes = document.querySelectorAll(".box");


// To get the same color for every box we can use these variables
// let r1 = Math.floor(Math.random() * (255 + 1));
// let r2 = Math.floor(Math.random() * (255 + 1));
// let g1 = Math.floor(Math.random() * (255 + 1));
// let g2 = Math.floor(Math.random() * (255 + 1));
// let b1 = Math.floor(Math.random() * (255 + 1));
// let b2 = Math.floor(Math.random() * (255 + 1));


boxes.forEach(element => {
    element.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
    element.style.color = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
});


