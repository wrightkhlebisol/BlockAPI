let express = require('express');

let app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        "body" : "Loaded index page"
    })
});

app.post('/', (req, res)=>{});

app.listen('8080', console.log("Listening on port 8080"));