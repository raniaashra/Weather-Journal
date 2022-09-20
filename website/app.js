// const { url } = require("inspector");

const { response } = require("express");

/* Global Variables */
const baseURL ="https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = '&appid=654fdf4746b16498b5cfa06dc205d7bb&units=imperial';
const apiUrl="http://localhost:4000";


//
document.getElementById('generate').addEventListener('click',generated);
function generated(){
    const zipcode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(baseURL, zipcode, apiKey)
    .then(function(data){
        console.log(data)
        postdata('/add', {temp:data.temp, data: data.date, content:data.content})
    });
    
    
};
const getWeather =async(baseurl, zip, key)=>{
    const res =await fetch(baseurl+zip+key);
    try{
        const data =await res.json();
        return data;
    }catch(er){
        console.log("error", er);
    }
}
const postdata = async(url ='', data ={})=>{
    const response =await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        Headers:{'content-Type': 'package/json'},
        
    
    });
    try{
        const newdata =await response.json();
        return newdata;
    }catch(er){
        console.log("error", er);
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
    document.getElementById('content').innerHTML = allData.content;
    document.getElementById("date").innerHTML =allData.date;
    }
    catch(error) {
        console.log("error", error);
      // appropriately handle the error
    }
}
const btn =document.getElementById('generate');
btn.addEventListener('click',function(){
console.log("click");
});
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
