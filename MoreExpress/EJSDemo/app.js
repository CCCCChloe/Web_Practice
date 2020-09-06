var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render("home");
});

app.get("/fallinlovewith/:name", function(req, res) {
	var name = req.params.name;
	res.render("love", {nameVar: name});
	//res.send("welcome to the page of " + name);
});

app.get("/posts", function(req, res) {
	var posts = [
		{title: "Post 1", author: "sss"},
		{title: "Post 2", author: "sss"},
		{title: "Post 3", author: "sss"},
	];
	res.render("post", {posts: posts});
})

app.listen(3000, function() {
	console.log("server is listening");
});