document.getElementById("Tytul").style.textAlign="Center";

document.getElementsByTagName("body")[0].style.backgroundSize="100%";

var tabela = document.getElementById("Tabela");
tabela.style.textAlign="Center";
tabela.style.border="2px solid black";
tabela.style.margin="auto";

var komorki = document.getElementsByTagName("td");
for (i = 0; i < komorki.length; i++){
    komorki[i].style.border="1px solid black";
    komorki[i].style.backgroundColor="papayawhip";
}

var komorkiheader = document.getElementsByTagName("th");
for (i = 0; i < komorkiheader.length; i++){
    komorkiheader[i].style.border="1px solid black";
    komorkiheader[i].style.backgroundColor="palegoldenrod";
}

var opisy = document.getElementsByClassName("opis");
for (i = 0; i < opisy.length; i++){
    opisy[i].style.textAlign="center";
    opisy[i].style.marginTop="6px";
}

var zdj = document.getElementsByTagName("div");
for (i = 0; i < zdj.length; i++){
    zdj[i].style.textAlign="center";
}

document.getElementById("topButton").style.textAlign="right";


function topFunction() {
  document.documentElement.scrollTop = 0;
}