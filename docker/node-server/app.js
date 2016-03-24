var express = require('express');
var path = require('path');
var mysql = require('mysql');
var url = require('url');

var app = express();

var queryString = require("querystring");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Ok");
});


function connect(){
  var connection = mysql.createConnection({
        host     : '192.168.99.101',
        user     : 'Admin',
        password : 'Mdp123',
        database : 'bcf'
      });
  return connection;
};


app.get('/users', function(req, res) {
  console.log('GET request at /users');
    res.setHeader('Content-Type', 'text/plain');
    var connection = connect();
    connection.query('SELECT * FROM users', function(err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      return rows;
    });

});

app.get('/news', function(req, res) {
    console.log('GET request at /news');
      res.setHeader("Access-Control-Allow-Origin", "*");
      var connection = connect();
      var sql_req = "SELECT u.pseudo, n.title, n.sub_title, n.reg_date FROM news n join users u where n.user_id = u.id;";
      connection.query(sql_req, function(err, rows, fields) {
          if (err) throw err;
          console.log(rows);
          res.writeHead(200, { 'Content-Type': 'application/json'});
          res.end(JSON.stringify(rows));
          return res;
      });
});

app.post('/comments', function (req, res) {
    console.log('POST request at /comment');
    console.dir(req.body);
    var body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        console.log("Body: " + body);
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('post received');
    return res;
});



app.post('/inscription', function (req, res) {
    console.log('POST request at /inscription');
    var jsonString = '';
    req.on('data', function (data) {
        jsonString += data;
    });
    req.on('end', function () {
        json = JSON.parse(jsonString);
        var sql_req = 'INSERT INTO users VALUES (id,"'+json.firstname+'","'+json.name+'","'+json.pseudo+'","'+json.email+'",now())';
        var connection = connect();
        connection.query(sql_req, function(err, rows, fields) {
         res.send('INSERT user');
         if (err) {
              throw err;
              console.log("ko");
              res.writeHead(400, {'Content-Type': 'text/html'});
              res.end('KO - utilisateur non enregistré');
          } else{
              console.log("ok");
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.end('OK - utilisateur enregistré');
          }
        });
    });
});

// allows CORs
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
