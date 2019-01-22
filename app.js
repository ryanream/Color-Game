// Project coded as part of Colt Steele's Udemy Web Dev Bootcamp

var express = require("express");
var app     = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.get("/", function(req, res){
    res.render("home");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("colorGame server is running!");
});