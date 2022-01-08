const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var MeaningCloud = require('meaning-cloud');

var meaning = MeaningCloud({
    key: process.env.API_KEY
})

const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/get-key', function (req, res) {
    const key = process.env.API_KEY;
    res.send({key});
})
