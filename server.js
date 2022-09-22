// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port =5500;
const server = app.listen(port, listening);
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

app.get("/all", sendData);
function sendData(request, response){
    response.send(projectData);
    console.log(projectData);
}
// POST method route
let alldata =[];
app.post('/add', function (request, response) {
    console.log(request.body);
    newprojectData={
        temp:request.body.temp,
        date:request.body.date,
        feeling:request.body.content
    };
    response.send(projectData);
    alldata.push(newprojectData);
});

