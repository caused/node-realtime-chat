var express = require("express");
var mongoose = require("mongoose")
var Messages = require("./models/Messages");
var bodyParser = require("body-parser")

var app = express();
app.use(express.static(__dirname))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var dbUrl = ""
mongoose.connect(dbUrl, (err)=>{
    console.log("mongodb connected", err);
})

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
