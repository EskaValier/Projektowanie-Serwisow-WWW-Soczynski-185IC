//Task 4

let url_country4 =  'https://restcountries.eu/rest/v2/name/canada';
let xhr = new XMLHttpRequest();

xhr.open('GET', url_country4);

xhr.responseType = 'json';
xhr.send();

let countrylat = "";
let countrylng ="";

xhr.onload = function() {
  let responseObj = xhr.response;
  let countryName = responseObj[0].name;
  let countryCurrency = responseObj[0].currencies[0].name;
  console.log("4. AJAX example - country name: ", countryName);
  countrylat = responseObj[0].latlng[0];
  countrylng = responseObj[0].latlng[1];
  console.log("4.1\nlat: " + countrylat + " lng: " + countrylng + "\nand multiplication of this 2 value is: " + (countrylng*countrylat));
  nazwaAndCurrency(countryName, countryCurrency , function(result){
    console.log("4.2:\n" + result);
  });
};

function nazwaAndCurrency(nazwa,currency,fn){
    let zdanie = "In country " + nazwa + " you can pay using " + currency;
    fn(zdanie);
}