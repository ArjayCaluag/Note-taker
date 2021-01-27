// Include path package to get the correct file path for our html
var path = require("path");


// HTML GET Request
// The user is shown an HTML page of content per each request
module.exports = function (app) {
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });




};