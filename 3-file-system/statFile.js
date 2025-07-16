import fs from "fs";

// fs.stat("./newfile.txt", (err, stats) => {
//   if (err) throw err;
//   console.log("File stats : ", stats);
// });


const data = fs.statSync("./newfile.txt", {throwIfNoEntry: true});
console.log("data : ", data)