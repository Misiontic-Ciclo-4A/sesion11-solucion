// SOLUCIÓN USANDO PROMISIFY
// const fs = require("fs");
// const util = require("util");

// const readFile = util.promisify(fs.readFile);

// (async () => {
//   try {
//     const content = await readFile("../input.txt", "utf-8");
//     console.log(content);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// console.log("Program Ended");

// SOLUCIÓN BASICA PROMISE
const fs = require("fs");

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data.toString());
    });
  });
};

readFile("../input.txt")
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
console.log("Program Ended");
