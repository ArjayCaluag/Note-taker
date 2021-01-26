// fs required in order to read db.json file
const fs = require("fs")

// Gives access to our express server (app)
// Reads the file in db.json and returns the current hard coded notes in json data
module.exports = function(app){
app.get("/api/notes", function(req,res) {
    fs.readFile("db/db.json", "utf8", function (err, data) {
        if (err) throw err
        var notes = JSON.parse(data);
        res.json(notes);
    })
})};