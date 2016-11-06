var serialport = require('serialport');
var express = require('express');
var mysql = require('mysql');
var settings = require('./settings');
var bodyParser = require('body-parser');
var async = require('async');

app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3000);
console.log("server starting...");

var connection = mysql.createConnection({
  host     : settings.db_host,
  database : settings.db,
  user     : settings.db_user,
  password : settings.db_pass
});


var portName = '/dev/ttyACM0';
var sp = new serialport(portName, {
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false,
  parser: serialport.parsers.readline("\n")
});

var pattern;

app.get('/change', function(req, res) {
  var id_string = "";
  id = req.query.id;
  console.log(req.query.id);
  if(id == 1 || id == 2 || id == 3){
    id_string = id_string + id + ".";
    var exec = require('child_process').exec;
    exec("python test.py " + id_string);
    res.redirect("/");
  }else{
    content = "select info from pattern where id = " + id + ";";
    connection.query(content, function (err, results) {
      if(err){
        console.log(err);
      }else{
        var exec = require('child_process').exec;
        exec("python test.py " + results[0].info);
        console.log("list_send")
      }
    });
  }
});

app.get('/list', function(req, res) {
  res.contentType('application/json');
  content = "select id, name, explai from pattern;";
  connection.query(content, function (err, results) {
    if(err){
      console.log(err);
    }else{
      res.send(JSON.stringify(results));
      console.log("list_send");
    }
  });
});

app.post('/static', function(req, res) {

});

app.post('/custom', function(req, res) {
  var js = JSON.parse(req.body.custom);
  var coun = 0;
  for(key in js){
    coun = coun + 1;
    for(var i = 0; i < js[key].colors.length; i++){
      var color_str = "";
      var n=2;
      var color = js[key].colors[i];
      if(color != "#######"){
        var color_list = color.split("#");
        var r=new RegExp(".{1,"+n+"}","g");
        var color_parse = color_list[1].match(r);
        var color1 = parseInt(color_parse[0],16);
        var color2 = parseInt(color_parse[1],16);
        var color3 = parseInt(color_parse[2],16);
      }else{
        var color1 = 0;
        var color2 = 0;
        var color3 = 0;
      }
      color_str = color_str + color1 + "," + color2 + "," + color3;
      if(coun != 10){
        color_str = color_str + ","
      }else{
        color_str = color_str + "."
      }
      console.log(color_str);
    }
  }
  content = "insert into pattern (name,info,deffa,explai) values ('" + req.body.name + "','" + Str + "',0,'" + req.body.explain + "');";
  connection.query(content, function (err, results) {
    if(err){
      console.log(err);
    }else{
      console.log('insert');
    }
  });
});


sp.on('data', function(data) {
  console.log('data received: ' + data);
  if(data == "Hamon"){
  }
});

