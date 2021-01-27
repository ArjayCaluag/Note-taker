# Note Taker

This project consists of utilizing the use of Express to create an application that can write, save, and delete notes. We are given the front end portion of the application and we were tasked to create the backend. The API routes used for this projected contained GET, POST, and DELETE. After we get the application running, it is deployed to heroku.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/105950308-ff1a4b80-6022-11eb-9bd5-1322d910dcad.png)


# **Installation**
Install required dependencies
```html
npm install express
```

Track changes and push onto your own Github Repository.

```html
git add .
```
```bash
git commit -m "message"
```
```bash
git push origin main
```

# **Built With**

<ul>
    <li> Node.js - Open-source back-end javascript runetime environment that executes Javascript code out a web broswer</li>
    <li> express.js - minimal and flexible node.js application framework</li>
    <li> Javascript - text based programming languages used both on client-side and server-side</li>
    <li> Heroku - Cloud application platform that enables developers to build, run, and operate applications in the cloud.
</ul>

# **Code Snippet**

```js 
// require the express npm package that will give our server functionality
var express = require("express");

// Tells node that we are creating an express server
var app = express();

// Initial port that we add onto our listener
var PORT = process.env.PORT || 8080;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// finds and returns the files in our public directory
app.use(express.static("public"));

// Points our server to a series of route files.
// Gives our server a map of how to response when user visits or request data from various URLS.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// App listener that "Starts" our server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
```

```js
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

```
# **Deployed Heroku Link**
https://note-taker-rc.herokuapp.com/

# **Author**

Ron-Arjay Caluag

[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
