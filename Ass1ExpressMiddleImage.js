// JavaScript source code
var exp = require('express');
var app = exp();


app.get('/login', function (req, res) {
  
    res.sendFile(__dirname + "/login.html");
});
app.use(exp.static('images'));
app.listen(9000, function () {

    console.log("server started...");
})