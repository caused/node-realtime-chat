var app = require("./config/server")();

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
