import fs from "fs";
// async
// fs.unlink("./newfile.txt", (err) => {
//   if (err) throw err;
//   console.log("File removed successfully");
// });

// sync...
fs.unlinkSync("./newfile.txt");
