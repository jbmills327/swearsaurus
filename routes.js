var express = require("express");
var app = express();

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.sendFile("index.html", {
            root: "./public/html"
        });
    });

    // app.get("/pirate", (req, res) => {
    //     res.sendFile("pirate.html", {
    //         root: "./public/html"
    //     });
    // });

}
