import fs from "fs";

fs.readFile("./temp.txt", "utf-8", (err, data) => {
  console.log("readFile : ", data, err);
  if (err) throw err;

  fs.writeFile("./temp-backup.txt", data, "utf-8", (err) => {
    if (err) throw err;
  });

  fs.cp("./temp.txt", "./temp-backup.txt", (err) => {
    if (err) throw err;
  });

  fs.unlink("./temp.txt", (err) => {
    if (err) throw err;
  });
  console.log("Backup created and file deleted");
});
