const express = require("express");
const app = express();

// port 0 --> random free assign
const server = app.listen(0, function() {
    // log what port server is hosted on
    console.log('Listening on port:', server.address().port);
});
