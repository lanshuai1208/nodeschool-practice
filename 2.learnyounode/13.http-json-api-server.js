const http = require("http");
const port = process.argv[2];

function getTime(t) {
  const time = new Date(t);
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

function getUnixtime(t) {
  const time = new Date(t);
  return {
    unixtime: time.getTime(),
  };
}

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    return res.end("only get method allowed");
  }
  const [url, query] = req.url.split("?");

  const queryMap = (query || "").split("&").reduce((prev, cur) => {
    const [key, value] = cur.split("=");
    prev[key] = value;
    return prev;
  }, {});

  const { iso } = queryMap;

  if (url === "/api/parsetime") {
    res.end(JSON.stringify(getTime(iso)));
  }

  if (url === "/api/unixtime") {
    res.end(JSON.stringify(getUnixtime(iso)));
  }
});

server.listen(+port);
