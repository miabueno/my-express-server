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
    res.send("I am a computer science student and I love fried chicken and pork crackling");
})

// port 0 --> random free assign
const server = app.listen(0, function() {
    // log what port server is hosted on
    console.log('Listening on port:', server.address().port);
});
