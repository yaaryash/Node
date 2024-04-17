const http = require("http");
const currencies = require("./currencies.json");

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Currency DataBase</h1>`);
    res.end();
  } else if (url === "/currencies") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(currencies));
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(8082, () => {
  console.log("Listening");
});
