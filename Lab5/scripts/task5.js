// Task 5



let url = 'http://restcountries.eu/rest/v2/name/mexico';

fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log("5. fetch");
        let countryName = response[0].name;
        let country3Code = response[0].alpha3Code;
        let latitude = response[0].latlng[0];
        let gini = response[0].gini;
        console.log("5. Country: " + response[0].name);
        sumLatAndGini(latitude, gini , function(result){
            console.log("5.1:\n" + result);
        });
        nazwaAnd3Code(countryName, country3Code , function(result){
            console.log("5.2:\n" + result);
        });
    })

function sumLatAndGini(lat,gini,fn){
    let zdanie = "Sum of latitude: " + lat + " and gini: " + gini + "\nis equat to " + lat+gini;
    fn(zdanie);
}
function nazwaAnd3Code(nazwa,code3,fn){
    let zdanie = "Country " + nazwa + " have " + code3 + " alpha3code";
    fn(zdanie);
}