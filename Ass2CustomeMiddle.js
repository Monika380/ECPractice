// JavaScript source code
var exp = require('express');
var fs = require('fs');
app = exp();

app.use(function (req, res, next) {
	var cdate = new Date();
	var str = "Request received for " + req.url + " at " + cdate.toString() + "\n";
	fs.appendFile("log.txt", str, function (err) {
		if (!err) {
			console.log("log generated");
		}
	});
	next();
})

app.get('/login', function (req, res) {

	res.sendFile(__dirname + "/login.html");
});


app.get('/test', function (req, res) {
	res.sendFile(__dirname + "/test.html");
});


app.listen(9000, function () {
    console.log("Server started..")
})