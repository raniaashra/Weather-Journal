const { url } = require("inspector");

/* Global Variables */
const apiKey = '&appid=654fdf4746b16498b5cfa06dc205d7bb&units=imperial';
const apiUrl="http://localhost:4000";


//
document.getElementById('generate').addEventListener('click',generated);
function generated(){
    let data ={zipCode: document.getElementById('zip').value,
    content: document.getElementById('content').value,
    date: document.getElementById('date').value
}
}

const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData)
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
    document.getElementById('content').innerHTML = allData.feel;
    document.getElementById("date").innerHTML =allData.date;
    }
    catch(error) {
        console.log("error", error);
      // appropriately handle the error
    }
}
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();