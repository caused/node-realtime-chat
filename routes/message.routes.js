var mongoose = require("mongoose");


module.exports = function(app, io){
    var Message = mongoose.model("Message",{ name : String, message : String})

    app.get("/messages", (req, res)=>{
        Message.find({},(err, messages)=> {
            res.send(messages);
          })
    })

    app.post('/messages', (req, res) => {
        var message = new Message(req.body);
        console.log(message)
        message.save((err) =>{
          if(err)
            sendStatus(500);
            
            io.emit('message', req.body);
            res.sendStatus(200);
        })
      })
}