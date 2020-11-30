// Task 2

let url_country = 'https://restcountries.eu/rest/v2/name/canada';

fetch(url_country)
    .then(response => response.json())
    .then(capital => console.log(capital[0].capital, " jest stolica kraju: ", capital[0].name));

function nazwaAndRegion(nazwa,region,fn){
    let zdanie = "Kraj " + nazwa + " lezy w " + region;
    fn(zdanie);
}

async function sumLogLng(url) {
    
    let nazwa = "";
    let region = "";
    let lat = "";
    let lng = "";
    
    await fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log("2. object promise");
        nazwa = response[0].name;
        region = response[0].region;
        lat = response[0].latlng[0];
        lng = response[0].latlng[1];
        let result = `${nazwa} is in ${region} and has latitude equal to ${lat} and longitude equal tp ${lng}.`;
        console.log("Info about country: ", result);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(function() { isLoading = false; });

    console.log("2.1\nlat + lng",lat+lng);
    nazwaAndRegion(nazwa, region, function(result){
        console.log("2.2:\n" + result);
    });
}

sumLogLng(url_country);

function resolved(result) {
    console.log('Resolved');
}
  
function rejected(result) {
    console.error(result);
}
  
Promise.resolve("Succes").then(resolved, rejected);
Promise.reject(new Error('sth goes wrong')).then(resolved, rejected);
