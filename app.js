const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

const config = require('./config');
const con = config.sql();


// set the view engine to ejs
app.set('view engine', 'ejs');
// app.set('view options') 
// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
   var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var indexdata = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ...";
    res.render('pages/index', {indexdata: indexdata, drinks: drinks, name : 'Aman'});
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about', {name : '000'});
});

app.get('*', function(req, res) {
    res.render('pages/404');
});





// creata table

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created"); 
  });
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
*/
 
app.listen(port, console.log(`my port is ${port}`));