// JavaScript source code
var exp = require('express');
var app = exp();
app.listen(9000, function () {
    console.log("ajax app server started..");
});
app.get('/registerajx', function (req,res) {
    res.sendFile(__dirname + "/registerajx.html");
});


app.get('/getMessage', function (req, res) {
    res.send("<h1>Welcome " + req.query.uname + "</h1>");
});

app.all('*', function (req, res) {
    res.send("Invalid URL......");
});