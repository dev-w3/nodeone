const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

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
    res.render('pages/index', {indexdata: indexdata, drinks: drinks, name : '000'});
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about', {name : '000'});
});

app.get('*', function(req, res) {
    res.render('pages/404');
});

app.listen(port, console.log(`my port is ${port}`));