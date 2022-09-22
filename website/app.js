
let d = new Date();
/* Global Variables */
const baseURL ="https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = '&appid=654fdf4746b16498b5cfa06dc205d7bb&units=imperial';
const apiURL="http://localhost:5500";
// const server = "http://localhost::5500";


//
document.getElementById('generate').addEventListener('click',generated);
function generated(e){
    const zipcode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const temperature =document.getElementById('temp').value;
    getWeather(baseURL, zipcode, apiKey)
    .then(function(data){
        console.log(data);
        postdata(apiURL+'/add',{temp: data.main.temp, date: d, content:feelings});
        // 
        retrieveData();
    });
    
    
};
const getWeather =async(baseURL, zip, key)=>{
    const res =await fetch(baseURL+zip+key);
    try{
        const data =await res.json();
        return data;
    }catch(error){
        console.log("error", error);
    }
}
//Post data
const postdata = async(url ='', data ={})=>{
    console.log(data);
    const res =await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        Headers:{'Content-Type': 'application/json',
    },
        //create JSON from javascript object
        body: JSON.stringify(data),
    
    });
    
        try{
            const newdata =await res.json();
            console.log(newdata);
            return newdata;
        }catch(error){
            console.log("error", error);
        }

}

//to updateUi
const retrieveData = async (url='') =>{
    const request = await fetch(url);
        try {
        // Transform into JSON
        const allData = await request.json();
        console.log(allData)
        // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
        document.getElementById('content').innerHTML = allData.feel;
        document.getElementById("date").innerHTML =allData.date;
        }
        catch(error){
            console.log("error", error);
        // appropriately handle the error
        }
}

// Create a new date instance dynamically with JS
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
