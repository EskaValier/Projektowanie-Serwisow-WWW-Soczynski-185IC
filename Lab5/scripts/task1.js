// Task 1

console.log("1. callback");

async function fetch_try(url) {
    let response = await fetch(url);

    if (response.ok) {
    console.log("Status = ", response.status);
    let json_obj = await response.json();
    let country = json_obj[0].name;
    let capital = json_obj[0].capital;
    let latitude = json_obj[0].latlng[0];
    let longitude = json_obj[0].latlng[1];
    console.log("Chosen country: ", country, " with capital in: ", capital);
    console.log("Latitude: ", latitude);
    console.log("Longitude: ", longitude);
    } 
    else {
        console.log("HTTP-Error: " + response.status);
    }
}

let url_canada = 'https://restcountries.eu/rest/v2/name/canada';

fetch_try(url_canada);

async function sumLogLng(url,fn) {
    let response = await fetch(url);

    if (response.ok) {
    let json_obj = await response.json();
    let latitude = json_obj[0].latlng[0];
    let longitude = json_obj[0].latlng[1];
    fn(latitude+longitude);
    } 
    else {
        console.log("HTTP-Error: " + response.status);
    }
}

sumLogLng(url_canada, function(result){
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
        console.log("HTTP-Error: " + response.status);
    }
}

nameAndTimezones(url_canada,function(name,timezone){
    console.log("1.2:\nIn " + name + " are timezones:");
    let zones = "";
    timezone.forEach(zone => {
        zones=zones+zone+" ";
    });
    console.log(zones);
});