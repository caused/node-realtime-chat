var express = require("express");
var mongoose = require("mongoose")
var bodyParser = require("body-parser")

var app = express();
app.use(express.static(__dirname))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))



var http = require("http").Server(app);
var io = require("socket.io")(http);

require("./routes/message.routes")(app, io);

io.on("connection", () =>{
    console.log("a user is connected")
})

var dbUrl = "your connection string here"
mongoose.connect(dbUrl, (err)=>{
    console.log("mongodb connected", err);
})

var port = process.env.PORT || 3000;

http.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
