// Task 1 & 3

console.log("1. callback and 3. async/await");

async function fetch_try(url) {
    let response = await fetch(url);

    if (response.ok) {
    console.log("1. Status = ", response.status);
    let json_obj = await response.json();
    let country = json_obj[0].name;
    let capital = json_obj[0].capital;
    let latitude = json_obj[0].latlng[0];
    let longitude = json_obj[0].latlng[1];
    console.log("1. Chosen country: ", country, " with capital in: ", capital);
    console.log("1. Latitude: ", latitude);
    console.log("1. Longitude: ", longitude);
    } 
    else {
        console.log("1. HTTP-Error: " + response.status);
    }
}

let url_japan = 'http://restcountries.eu/rest/v2/name/japan';

fetch_try(url_japan);

async function sumLogLng(url,fn) {
    let response = await fetch(url);

    if (response.ok) {
    let json_obj = await response.json();
    let latitude = json_obj[0].latlng[0];
    let longitude = json_obj[0].latlng[1];
    fn(latitude+longitude);
    } 
    else {
        console.log("1. HTTP-Error: " + response.status);
    }
}

sumLogLng(url_japan, function(result){
    console.log("1.1:\nSuma latitude oraz longitude wynosi: " + result);
});

async function nameAndTimezones(url,fn) {
    let response = await fetch(url);

    if (response.ok) {
    let json_obj = await response.json();
    let name = json_obj[0].name;
    let timezones = json_obj[0].timezones;
    fn(name,timezones);
    } 
    else {
        console.log("1. HTTP-Error: " + response.status);
    }
}

nameAndTimezones(url_japan,function(name,timezone){
    console.log("1.2:\nIn " + name + " are timezones:");
    let zones = "";
    timezone.forEach(zone => {
        zones=zones+zone+" ";
    });
    console.log(zones);
});