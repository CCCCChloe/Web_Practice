var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
	var ani = req.params.animal;
	if (ani == "pig") {
		res.send("The pig says 'Oink'");
	} else if (ani == "cow") {
		res.send("The cow says 'Moo'");
	} else if (ani == "dog") {
		res.send("The dog says 'Woof Woof!'");
	} else {
		res.send("no such animal");
	};
});

app.get("/repeat/:str/:num", function(req, res) {
	console.log(req.params);
	var text = req.params.str;
	var times = req.params.num;
	var ans = "";
	for (var i = 0; i < times; i++) {
		ans += " ";
		ans += text;
	}
	res.send(ans);
})

app.get("*", function(req, res) {
	res.send("Sorry, page not found... What are you doing with your life?");
})

app.listen(3000, function() {
	console.log("assignment is running");
});