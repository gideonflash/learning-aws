const { hostname } = require("os");
const http = require("http");
const message = "Hello World\n";
const port = 8080;

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader("Content-Type", "text/pain");
  res.end(message);
});

server.listen(port, hostname, () => {
  console.log(`Server runing at http://${hostname()}:${port}`);
});
