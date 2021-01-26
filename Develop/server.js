// require the express npm package that will give our server functionality
var express = require ("express");

// Tells node that we are creating an express server
var app = express();

// Initial port that we add onto our listener
var PORT = process.env.PORT || 8080;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// Points our server to a series of route files.
// Gives our server a map of how to response when user visits or request data from various URLS.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// App listener that "Starts" our server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});