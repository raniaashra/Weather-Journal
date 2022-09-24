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
    console.log(`running on localhost ${port}`);
}

app.get("/all", sendData);
function sendData(request, response){
    response.status(200).send(projectData);
    projectData=[];
}
// POST method route
let alldata =[];
app.post('/add', addData);
function addData(request, response){
    console.log(request.body);
    newprojectData={
        temp:request.body.temp,
        date:request.body.date,
        feeling:request.body.content
    };
    
    alldata.push(newprojectData);
    projectData =alldata;
    response.send(projectData).status(200);
    console.log(projectData);
}
