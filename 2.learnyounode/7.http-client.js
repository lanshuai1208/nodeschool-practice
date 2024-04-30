const http = require("http");

const url = process.argv[2];

http.get(url, function (response) {
  response.setEncoding("utf8");
  let res = "";
  response.on("data", function (chunk) {
    // res += chunk;
    process.stdout.write(chunk + "\n");
  });

  //   response.on("error", function (err) {
  //     process.stdout.write(err + "\n");
  //   });

  //   response.on("end", function () {
  //     process.stdout.write(res + "\n");
  //   });
});
