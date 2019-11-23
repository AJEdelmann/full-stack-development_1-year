// let fs = require("fs");

// let myStream = fs.createReadStream("data.txt", "utf8");
// let chunkNumber = 1;
// let word = "double-decker";
// let wordCounter = 0;

// myStream.on("data", chunk => {
//   console.log(`Reading chunk no ${chunkNumber} `);
//   chunkNumber++;

//   let arr = chunk.split(" ");
//   arr.forEach(el => {
//     if (el === word) wordCounter++;
//   });

//   console.log(`I found the word ${word} ${wordCounter} times`);
//   wordCounter = 0;
// });

// myStream.on("end", () => {
//   console.log("==========================");
// });



/////////////////////////////////////
/////////////////////////////////////
////////////   PIPES    /////////////
/////////////////////////////////////
/////////////////////////////////////

let fs = require("fs");

let readStream = fs.createReadStream('data2.txt', 'utf8');
let writeStream = fs.createWriteStream('result.txt', 'utf8');
// readStream.pipe(writeStream);

readStream.on('data', ch => {
    let res = ch.toUpperCase();
    writeStream.write(res);
})
