var express = require("express");


module.exports = function(){
    var app = express();

    require('../router/test.route.js')(app);

    return app;
}

