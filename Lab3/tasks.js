
function Zadanie1(tekst) {
    var kropki = "Zadanie 1\nLiczba liter: ";
    for(var i = 0; i < tekst.length; i++){
        kropki = kropki + ".";
    }
    console.info(kropki);
}

Zadanie1('Jakis tekst');

function Zadanie2(arr){
    var suma=0;
    for(var i = 0; i < arr.length; i++){
        suma = suma + arr[i];
    }
    console.info("Zadanie 2:\n" + suma);
}

const liczby = [2, 6, 9, 3];
Zadanie2(liczby);

function Zadanie3(tekst){
    var nowy = "";
    var up=1;
    for(var i = 0; i < tekst.length; i++){
        if(up == 1){
            nowy = nowy + tekst[i].toUpperCase();
            up = 0;
        }
        else{
            nowy = nowy + tekst[i].toLowerCase();
            up = 1;
        }
    }
    return nowy;
}

function Zadanie3Wyswietl(tekst){
    var nowy = Zadanie3(tekst);
    console.info("Zadanie 3:\n" + nowy);
}

Zadanie3Wyswietl("ala ma kota");

function Zadanie4(a,b){
    if(typeof(a) == "number" && typeof(b) == "number"){
        console.info("Zadanie 4:\n" + a*b);
    }
    else{
        return false
    }
}

Zadanie4(4,5);
Zadanie4("a",5);

function Zadanie5(imie, miesiac){
    miesiacIgnoreCase = miesiac.toLowerCase();
    switch(miesiacIgnoreCase){
        case "grudzien":
        case "styczen":
        case "luty":
            console.info("Zadanie 5:\n" + imie + " jezdzi na sankach");
            break;
        case "marzec":
        case "kwiecien":
        case "maj":
            console.info("Zadanie 5:\n" + imie + " chodzi po kaluzach");
            break;
        case "czerwiec":
        case "lipiec":
        case "sierpien":
            console.info("Zadanie 5:\n" + imie + " sie opala");
            break;
        case "wrzesien":
        case "pazdziernik":
        case "listopad":
            console.info("Zadanie 5:\n" + imie + " zbiera liscie");
            break;
        default:
            console.info("Zadanie 5:\n" + imie + " uczy sie JS");
            break;
    }
}

Zadanie5("Dominik","Grudzien");
Zadanie5("Dominik","maj");
Zadanie5("Dominik","LIPIEC");
Zadanie5("Dominik","PaZdZiErNiK");
Zadanie5("Dominik","Grudzienn");

function Zadanie6(tekst, znak){
    var arr = tekst.split(znak);
    arr.sort();
    var posort = arr.join(znak);
    console.info("Zadanie 6:\n" + posort);
}

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
Zadanie6(str,"|");

function Zadanie7_1(tab){
    for(var i = 0; i < tab.length; i++){
        tab[i] = tab[i].toUpperCase();
    }
    console.info("Zadanie 7:\n" + tab);
}

function Zadanie7_2(tab){
    for(var i = 0; i < tab.length; i++){
        tab[i] = Zadanie3(tab[i]);
    }
    console.info("Zadanie 7:\n" + tab);
}

const arrImion = ["Ania" , "Marcin" , "Bartek" , "Piotr"];
Zadanie7_1(arrImion);
Zadanie7_2(arrImion);

function checkFemale(imie){
    var ostatnialitera = imie[imie.length-1].toLowerCase();
    if(ostatnialitera=="a"){
        return true;
    }
    else{
        return false;
    }
}

function Zadanie8(imie){
    console.info("Zadanie 8:\n" + checkFemale(imie));
}

Zadanie8("ania");
Zadanie8("dominik");

function Zadanie9(arrUsers){
    var ileKobiet = 0;

    for(var i = 0; i < arrUsers.length; i++){
        var arr = arrUsers[i].split(" ");
        if(checkFemale(arr[0])){
            ileKobiet++;
        }
    }
    console.info("Zadanie 9:\nKobiet: " + ileKobiet);
}

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]
Zadanie9(users);
