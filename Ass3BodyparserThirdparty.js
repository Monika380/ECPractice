// JavaScript source code
var exp = require('express');
var bp = require('body-parser');

var app = exp();
app.use(bp.urlencoded({ extended: false }));

app.listen(9000, function () {

    console.log("server started on 9000");
})

app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.post('/logincheck', function (req, res) {
	//need to access req.body
	//defaultly- req.query

	if (req.body.udi == "monika" && req.body.pwd == "monika123") {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write("<h2> Successful </h2>");
		res.write("<h3> Welcome " + req.body.udi + " </h3>");
		res.end();
	}
	else
		res.send("<h3> Failed </h3>");
});