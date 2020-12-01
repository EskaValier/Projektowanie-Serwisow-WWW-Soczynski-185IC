//Task6

let url_country6 = 'http://restcountries.eu/rest/v2/name/finland';

axios.get(url_country6)
  .then(function (response) {
    // handle success
    let name = response.data[0].name;
    let domain = response.data[0].topLevelDomain;
    let latitude = response.data[0].latlng[0];
    let gini = response.data[0].gini;
    console.log(`6. axios country ${name} .` );
    sumLatAndGini(latitude, gini , function(result){
        console.log("6.1:\n" + result);
    });
    nazwaAndDomain(name, domain , function(result){
        console.log("6.2:\n" + result);
    });
  })
  .catch(function (error) {
    // handle error
    console.log("6. axios country: ", error);
  })
  .then(function () {
    // always executed
    console.log("Task end :D");
  });

function sumLatAndGini(lat,gin,fn){
    let zdanie = "Sum of latitude: " + lat + " and gini: " + gin + "\nis equat to " + (lat+gin);
    fn(zdanie);
}
function nazwaAndDomain(nazwa,domain,fn){
    let zdanie = "Country " + nazwa + " have domain: " + domain;
    fn(zdanie);
}