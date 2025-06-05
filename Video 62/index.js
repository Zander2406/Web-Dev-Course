/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

let adj = {
    0: "Crazy",
    1: "Amazing",
    2: "Fire",
};

let sname = {
    0: "Engine",
    1: "Foods",
    2: "Garments",
};

let aword = {
    0: "Bros",
    1: "Limited",
    2: "Hub",
};

let c0 = Math.floor(Math.random() * 3);
let c1 = Math.floor(Math.random() * 3);
let c2 = Math.floor(Math.random() * 3);

console.log(`${adj[c0]} ${sname[c1]} ${aword[c2]}`);