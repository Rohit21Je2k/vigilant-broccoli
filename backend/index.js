const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  // cors
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  };
  if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
    return;
  }

  //  responce handling
  if (url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello, World!</h1>");
    res.end();
  }
});

server.listen(process.env.PORT || 8000, () => {
  console.log("Server Running");
});
