const btn1 = document.getElementById("btn1");
function clickHandler() {
    console.log("Kliknięto w przycisk - click");
}
btn1.addEventListener("click", clickHandler);

function dblclickHandler() {
    console.log("Kliknięto podwójnie w przycisk - double click");
}
btn1.addEventListener("dblclick", dblclickHandler);

const input1 = document.getElementById("tekst");
function changeHandler(){
    console.log("Zmiana tekstu w polu enter text (po wcisnieciu przycisku ENTER) - change");
}
input1.addEventListener("change",changeHandler);

function contextmenuHandler(){
    console.log("Kliknięcie prawym przyciskiem myszy na input - contextmenu");
}
input1.addEventListener("contextmenu",contextmenuHandler);

function keyPressHandler(e){
    console.log("Wciśnięto klawisz " + e.code + " - keypress");
}
document.addEventListener("keypress",keyPressHandler);

function keyDownHandler(){
    console.log("Przyciśnięto klawisz - keydown");
    document.removeEventListener("keydown",keyDownHandler);
    console.log("Usunięta obsługa przycisniecia klawisza - removeEventListener dla keyDown");
}
document.addEventListener("keydown",keyDownHandler);

function keyUpHandler(){
    console.log("Zwolniono klawisz - keyup");
    document.removeEventListener("keyup",keyUpHandler);
    console.log("Usunięta obsługa zwalniania klawisza - removeEventListener dla keyup");
}
document.addEventListener("keyup",keyUpHandler);

function copyHandler(){
    console.log("Skopiowano - copy");
}
document.addEventListener("copy",copyHandler);

function mouseenterHandler(){
    console.log("Najechano na element nagłówka - mouseenter");
}
document.getElementById("naglowek").addEventListener("mouseenter",mouseenterHandler);

function volumechangeHandler(){
    console.log("Zmiana głośności - volumechange");
}
document.addEventListener("volumechange",volumechangeHandler);

function animationendHandler(){
    console.log("Animacja kolorowego pudełka skończyła się - animationend");
}
document.getElementById("animacja").addEventListener("animationend",animationendHandler);

function topFunction() {
    document.documentElement.scrollTop = 0;
}