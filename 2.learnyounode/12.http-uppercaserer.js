const http = require("http");

const port = process.argv[2];

// // not use pipe
// const server = http.createServer(function (req, res) {
//   if (req.method !== "POST") {
//     return res.end("not post method");
//   }
//   let data = "";
//   req.on("data", (chunk) => {
//     data += chunk;
//   });
//   req.on("end", () => {
//     res.end(data.toString().toUpperCase());
//   });
// });

// use pipe
const map = require("through2-map");
const server = http.createServer(function (req, res) {
  if (req.method !== "POST") {
    return res.end("send me a post\n");
  }
  req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
});

server.listen(+port);
