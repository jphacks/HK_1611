var express = require('express');
var app = express();

app.use(express.static('./public'));
app.listen(3000,'0.0.0.0', function() {

  console.log("Listening Server..");
})
