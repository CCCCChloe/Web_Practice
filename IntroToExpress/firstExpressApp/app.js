var express = require("express");
var app = express();

// / --> hi there
app.get("/", function(req, res) {
	res.send("Hi there!");
});
// /bye -->
app.get("/bye", function(req, res) {
	res.send("Bye bye");
});
// /dogs -->
app.get("/dogs", function(req, res) {
	console.log("someone made a request to /dogs");
	res.send("Meow");
});

app.get("/r/:sub", function(req, res) {
	console.log(req.params);
	var sub = req.params.sub;
	res.send("welcome to " + sub);
})

app.get("/r/:sub/comment/:ss/", function(req, res) {
	res.send("pattern match two");
})

app.get("*", function(req, res) {
	res.send("you cannot reach here");
})


app.listen(3000, function() {
	console.log("listen on port 3000");
})