async function line1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let first_line = document.createElement("div");
            first_line.innerHTML = `Initializing Hacking <span class="dots">...</span>`;
            document.body.appendChild(first_line);
            resolve(455);
        }, (Math.floor(Math.random() * 7) + 1) * 1000);
    })
}

async function line2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let second_line = document.createElement("div");
            second_line.innerHTML = `Reading your files <span class="dots">...</span>`;
            document.body.appendChild(second_line);
            resolve(455);
        }, (Math.floor(Math.random() * 7) + 1) * 1000);
    })
}

async function line3() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let third_line = document.createElement("div");
            third_line.innerHTML = `Password files detected <span class="dots">...</span>`;
            document.body.appendChild(third_line);
            resolve(455);
        }, (Math.floor(Math.random() * 7) + 1) * 1000);
    })
}

async function line4() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let fourth_line = document.createElement("div");
            fourth_line.innerHTML = `Sending all passwords and personal files to server <span class="dots">...</span>`;
            document.body.appendChild(fourth_line);
            resolve(455);
        }, (Math.floor(Math.random() * 7) + 1) * 1000);
    })
}

async function line5() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let fifth_line = document.createElement("div");
            fifth_line.innerHTML = `Cleaning up <span class="dots">...</span>`;
            document.body.appendChild(fifth_line);
            resolve(455);
        }, (Math.floor(Math.random() * 7) + 1) * 1000);
    })
}




async function main() {
    document.body.style.backgroundColor = "green";
    console.log("Main func started");
    let a = await line1();
    console.log("Line 1 executed");
    let b = await line2();
    console.log("Line 2 executed");
    let c = await line3();
    console.log("Line 3 executed");
    let d = await line4();
    console.log("Line 4 executed");
    let e = await line5();
    console.log("Line 5 executed");

}

main();

