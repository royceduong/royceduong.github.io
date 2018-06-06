var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname + "/static")));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname+'/main.html'));
})
app.get('/about', function(request, response){
    response.sendFile(path.join(__dirname+'/about.html'));
})
app.listen(8000, function(){
    console.log("listening on port 8000");
});