let express = require('express');

let app = express();

app.get('/block/:id', (req, res) => {
    res.status(200).json({
        "body": "Loaded index page"
    })
});

app.post('/', (req, res, next) => {
    console.log(req.status);
    next();
});

app.listen('8080', console.log("Listening on port 8080"));