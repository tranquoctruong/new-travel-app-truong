/* Setup env for API keys */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const axios = require('axios');

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Spin up the server
const port = 8000;
const server = app.listen(port, listening);

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
})

// Callback to debug
function listening() {
    console.log(`Server running on localhost: ${port}`);
}

app.post('/getLocation', async(req, res) => {
    console.log(process.env.GEOCODES_NAME);
    console.log(req.body.location);
    const response = await axios.get(`http://api.geonames.org/searchJSON`, {
            params: {
                q: req.body.location,
                username: process.env.GEOCODES_NAME,
                maxRows: 10
            }
        });
    try {
        const data = response.data.geonames;
        let coordinates = {
            lat: data[0].lat,
            long: data[0].lng
        };
        res.send(coordinates);
    } catch (error) {
        console.log("Error", error);
    }
})

app.post('/getWeather', async(req, res) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.long}&key=${process.env.WEATHERBIT_KEY}`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("Error", error);
    }
})

app.post('/getPhoto', async(req, res) => {
    const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${req.body.city}&image_type=photo`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("Error", error);
    }
})