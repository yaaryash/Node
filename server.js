const http = require("http");

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  // console.log("hello from server");
  const serverInfo = {
    serverName: "CodeSandBox Server",
    version: "1.0.0",
    currentDate: new Date().toDateString(),
    currentTime: new Date().toTimeString(),
  };
  if (url === "/status") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(serverInfo));

    res.end();
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Hello From Server</h1>`);

    res.end();
  }
});

server.listen(8082, () => {
  console.log("Listening");
});
