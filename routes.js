var express = require("express"),
    API = require("./words.js");
var app = express();

module.exports = (app) => {

    app.get("/", (req, res) => {
        res.sendFile("index.html", {
            root: "./public/html"
        });
    });

    app.get("/api/words", (req, res) => {
        res.send(API);
    })

    // app.get("/pirate", (req, res) => {
    //     res.sendFile("pirate.html", {
    //         root: "./public/html"
    //     });
    // });

}
