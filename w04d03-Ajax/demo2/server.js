const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// Line number 8 sends out the public folder.
app.use(express.static("public"));

app.get('/memes', (req, res) => {
    // some logic to be delivered as response

    res.send('<h1>hello world</h1>')
})


app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
});