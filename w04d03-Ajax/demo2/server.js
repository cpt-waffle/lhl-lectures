const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Line number 8 sends out the public folder.
app.use(express.static("public"));

app.get('/cars', (req, res) => {
    // we collect or make the data we want...
    const cars = ['toyota corolla', 'honda civic', 'nissan 370z'];
    // we send the data out using the res.json() function
    res.json(cars);
})


app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
});