const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send(`'Youre a stunning murderous little creature ${String.fromCodePoint(0x1F60F)}'`);
});

app.listen(8000, function() {
  console.log('Server started on port 8000');
});
