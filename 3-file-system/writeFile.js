import fs from "fs";

// // It's async... call
// fs.writeFile(
//   "./test.js",
//   "console.log(`Hi, this file is created with fs module with writeFile`)",
//   (err) => {
//     if (err) throw err;
//     console.log("File created successfully");
//   }
// );
// console.log("Who will print first ->");

// It's sync... call
fs.writeFileSync(
  "./test.js",
  "console.log(`Hi, this file is created with fs module with writeFileSync`)",
  (err) => {
    if (err) throw err;
    console.log("File created successfully");
  }
);

console.log("Who will print first ->");
