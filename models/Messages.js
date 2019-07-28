var mongoose = require("mongoose");

var Messages = mongoose.model("Message",{ name : String, message : String})

module.exports.Message = Messages;