const http = require('http');

const hostname = 'ec2-3-132-213-41.us-east-2.compute.amazonaws.com';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var url = req.url;
  if (url.split("?").length > 1) {
    url = url.substring(2, url.length);
    url = url.split("&");
    var q = {};
    for (var i = 0; i < url.length; i++) {
      q[url[i].split("=")[0]] = url[i].split("=")[1]];
    }
    console.log(q);
  }
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
