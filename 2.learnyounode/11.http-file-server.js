const http = require("http");
const fs = require("fs");

const port = process.argv[2];

const location = process.argv[3];

// // not use pipe
// const server = http.createServer(function (req, res) {
//   const stream = fs.createReadStream(location);
//   stream.setEncoding("utf8");
//   let data = "";
//   stream.on("data", function (chunk) {
//     data += chunk;
//   });
//   stream.on("end", function () {
//     res.end(data);
//   });
// });

// use pipe
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  fs.createReadStream(location).pipe(res);
});

server.listen(+port);
