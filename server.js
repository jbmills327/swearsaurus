var express = require("express"),
    // logger = require("morgan"),
    routes = require("./routes"),
    bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();


// app.use(logger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));
routes(app);



app.listen(PORT, (err) => {
    if (err) {
        console.log("Server Error: ", err);
        process.exit(1);
    }

    console.log("Server is up and running on port: ", PORT);
})
