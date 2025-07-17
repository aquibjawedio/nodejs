import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  fs.appendFile(
    "./log.txt",
    `${Date.now()} : New request recieved from url - ${req.headers.host}${
      req.url
    } Device : ${req.headers["user-agent"]} \n`,
    (err) => {
      if (err) throw err;
    }
  );
  console.log("REQ : ", req.headers);
  console.log("Request recieved");
  res.end("HELLO THIS IS LOCALHOST SERVER");
});

server.listen(4000, () => {
  console.log("Server is listening at http://localhost:4000");
});
