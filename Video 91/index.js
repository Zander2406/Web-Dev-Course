// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these file sbecome:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf, pdf/harry.pdf
// zip/harry.zip, zip/Rohan.zip

const fs = require('fs');
const path = require('path');

function makeFolders(extensions) {
    for (let index = 0; index < extensions.length; index++) {
        fs.mkdir(`./${extensions[index]}`, {recursive: true}, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
}

function shiftFiles(files, extensions) {
    for (let index1 = 0; index1 < extensions.length; index1++) {
        const currentExtension = extensions[index1];
        for (let index2 = 0; index2 < files.length; index2++) {
            if (files[index2].includes(currentExtension)) {
                // console.log(`${currentExtension}: ${files[index2]}`);
                fs.rename(files[index2], `${currentExtension}/${files[index2]}`, (err)=>{
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log(`Moved file to ${currentExtension}`);
                    }
                });
            }
        }
    }
}

function main() {
    let filesInDirectory = fs.readdirSync('./', { withFileTypes: true }).map(files => files.name);

    const index = filesInDirectory.indexOf('package.json');
    if (index > -1) {
        filesInDirectory.splice(index, 1);
    }

    const index2 = filesInDirectory.indexOf('index.js');
    if (index > -1) {
        filesInDirectory.splice(index2, 1);
    }

    let fileExtensions = [];
    for (let index = 0; index < filesInDirectory.length; index++) {
        const element = filesInDirectory[index];
        fileExtensions.push(path.extname(element).slice(1,));
    }

    fileExtensions = new Set(fileExtensions);
    fileExtensions = [...fileExtensions];
    fileExtensions = fileExtensions;

    makeFolders(fileExtensions);
    shiftFiles(filesInDirectory, fileExtensions);



    // console.log(filesInDirectory);
}

main();






