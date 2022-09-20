// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port =4000;
const server = app.listen(port, listening);
function listening(){
    console.log(`running on localhost: ${port}`);
}

app.get("/all", sendData);
function sendData(req, res){
    res.send(projectData);
}
// POST method route
app.post('/add', function (req, res) {
    projectData={
        temp:req.body.temp,
        date:reqbody.date,
        content:req.body.content
    };
    res.send(projectData);
});

