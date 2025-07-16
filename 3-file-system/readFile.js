import fs from "fs";

// // it's an async... call
// fs.readFile("./details.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("File read succesfull", data);
// });
// console.log("Who will print first below - readFile");

// it's a sync... call
const data = fs.readFileSync("./details.txt", "utf-8");

// Creating new file with same data
fs.writeFileSync("./newfile.txt", data);

console.log("Who will print first below - readFileSync : ", data);
