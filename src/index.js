var express = require('express');
var app = express();
const PORT = 3020;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`Example app listening on port  ${PORT}`);
});

console.log("Hola Mundo");