async function sleep() {
    return new Promise((resovle , reject)=>{
        setTimeout(() => {
            resovle(45);
        }, 1000);
    })
}

function sum(a, b, c) {
    return a + b + c;
}

(async function main(){
    console.log(a1);
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let x, y = [1, 5];
    // let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
    // console.log(x, y, rest);


    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let {a, b} = obj;
    console.log(a, b);

    let arr = [1, 4, 6];
    console.log(sum(...arr));

    let a1 = 6;
})()

