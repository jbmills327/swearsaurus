var express = require("express"),
    // logger = require("morgan"),
    bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();

// app.use(logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile("/index.html", {
        root: __dirname
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server Error: ", err);
        process.exit(1);
    }

    console.log("Server is up and running on port: ", PORT);
})
