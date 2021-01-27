// fs required in order to read db.json file
const fs = require("fs")

// Gives access to our express server (app)
// Reads the file in db.json and returns the current hard coded notes in json data
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err
            var notes = JSON.parse(data);
            res.json(notes);
        })
    });

    // app.post method to handle POST request to the body.
    app.post("/api/notes", function (req, res) {
        var notes = req.body

        // Read db/db.json file and pushes new notes to server
        fs.readFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err
            var noteInfo = JSON.parse(data)

            noteInfo.push(notes)
            // Create unique ids for each note
            noteInfo.forEach(function (note, id) {
                note.id = id + 1
            });
            console.log(noteInfo);

            // stringifys new notes and adds onto the db.json file.
            fs.writeFile('db/db.json', JSON.stringify(noteInfo), 'utf8', function (err) {
                if (err) throw err
            })
        })

        res.json(notes)
    });

    // Path with the parameter id route
    app.delete("/api/notes/:id", function (req, res) {
        var emptyNote = req.params.id


        fs.readFile("db/db.json", "utf8", function (err, data) {
            if (err) throw err

            var noteDelete = JSON.parse(data)
            // Takes id of note and - 1 to get index location
            var index = parseInt(emptyNote) - 1
            // removes or replaces 1 element at index location
            noteDelete.splice(index, 1);
            console.log("Note at index of " + index + " deleted.");
            console.log(noteDelete);

            // rewrite db.json file once notes are deleted
            fs.writeFile("db/db.json", JSON.stringify(noteDelete), "utf8", function (err) {
                if (err) throw err
            })
        })
        res.send(emptyNote)
    })

};