console.log("Loop Tutorial")

let a = 1;
console.log(a + 1)
console.log(a + 2)


for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Zander",
    role: "Programmer",
    company: "None"
}

for (const key in obj) {

    const element = obj[key];
    console.log(key, element);

}

for (const c of "Zander") {
    console.log(c);
}

// let i = 0;
// while (i < 6) {
//     console.log(i++);
// }


let i = 7;
do {
    console.log(i++);
} while (i < 6);
