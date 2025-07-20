// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
function createDuplicates(array) {
    let result = [];
    let cache = -1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element != cache) {
            result.push(element, element);
        }
        else {
            result.push(element);
        }
        cache = element;
    }
    return result;
}

function main() {
    let test_array = [2, 5, 6, 9, 9, 7];
    let result = createDuplicates(test_array);
    console.log(result);
}

main();



