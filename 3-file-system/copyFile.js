import fs from "fs";

// Copying file async.. call

fs.cp("./test.js", "./test-copy.txt", (err) => {
    if (err) throw err;
    console.log("File copy successfull");
})



