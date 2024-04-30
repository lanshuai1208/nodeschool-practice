// use Promise.all
const http = require("http");

const urls = [process.argv[2], process.argv[3], process.argv[4]];

const ps = [];

urls.forEach((url) => {
  const p = new Promise((resolve) => {
    http.get(url, function (response) {
      response.setEncoding("utf8");
      let res = "";
      response.on("data", function (chunk) {
        res += chunk;
      });

      response.on("error", function (err) {
        process.stdout.write(err);
      });

      response.on("end", function () {
        resolve(res);
      });
    });
  });
  ps.push(p);
});

Promise.all(ps).then((res) => {
  res.forEach((content) => {
    process.stdout.write(content + "\n");
  });
});

// use async
