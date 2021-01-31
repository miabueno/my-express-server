const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("please contact me on mia123@example.com");
});

// tutorial task
app.get("/about", (req, res) => {
    res.send("I am a comp sci student, I love vodka and pork crackling");
})

app.get("/hobbies", (req, res) => {
    res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
});

// port 0 --> random free assign
const server = app.listen(0, function() {
    // log what port server is hosted on
    console.log('Listening on port:', server.address().port);
});
