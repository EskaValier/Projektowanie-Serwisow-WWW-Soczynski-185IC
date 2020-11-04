"use strict";

let x = document.getElementsByClassName("badge-light");
x[0].innerHTML = 6; // x[0] to pierwszy znaleziony element

var paragrafy = document.getElementsByTagName("p");
for (var i = 0; i < paragrafy.length; i++){
    paragrafy[i].style.marginTop="10px";
    paragrafy[i].style.marginBottom="10px";
}

var li = document.getElementsByTagName("li");
for (i = 0; i < li.length; i++){
    "use strict";
    li[i].style.marginTop="10px";
    li[i].style.marginBottom="10px";
}

function CreateTable() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "NewTable");
    document.body.appendChild(x);
  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("NewTable").appendChild(y);
}

function AddElement() {
    var x = document.getElementById("NewTable");
  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("NewTable").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
}

function AddRow() {
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("NewTable").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("NewTable").appendChild(z); 
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

$("#Show").hide();

$("body").css("color", "white", "backgroundSize", "100%");

$("ol").css("text-align", "center");

$("h1").css("text-align", "center");

$(document).ready(function(){
    // wyświetla tekst z paragrafu w konsoli
    $("#ShowTekst").click(function(){
      console.log("Text: " + $("#test").text());
    });

    // wyświetla kod html paragrafu w konsoli
    $("#ShowHTML").click(function(){
      console.log("HTML: " + $("#test").html());
    });

    // wyświetla w konsoli tekst o notyfikacji
    $("#notifications").click(function(){
        alert("Some button function write result in console");
    });

    // wyświetla w konsoli tekst "Welcome (wpisany tekst w pole)"
    $("#tekst").click(function(){
        console.log("Welcome " + $("#imie").val());
    });

    // dodaje tekst na początku paragrafów
    $("#AddPreTekst").click(function(){
        $("p").prepend("<b>Prepended text</b>. ");
    });

    // dodaje tekst na końcu paragrafów
    $("#AddAppTekst").click(function(){
        $("p").append(" <b>Append text</b>.");
    });
    
    // dodaje kolejny element na początku listy
    $("#AddFirstListItem").click(function(){
        $("ol").prepend("<li class='added'>Prepended item</li>");
    });

    // dodaje kolejny element do listy
    $("#AddLastListItem").click(function(){
        $("ol").append("<li class='added'>Appended item</li>");
    });

    // opróżnia elementy dodane do listy
    $("#EmptyListItem").click(function(){
        $("li.added").empty();
    });

    // usuwa wszystkie dodane elementy
    $("#DellListItem").click(function(){
        $("li.added").remove();
    });
    
    // zmiana koloru przycisków
    $("#ColorButton").click(function(){
        $("button").css("background-color", "green");
    });

    // ukrywa przyciski w liście (jeśli są widoczne)
    $("#Hide").click(function(){
        $("button").hide();
        $("ol").hide("slow");
        $("#Show").show();
        $("#Hide").hide();
    });

    // pokazuje przyciski w liście (jeśli są ukryte)
    $("#Show").click(function(){
        $("button").show();
        $("ol").show();
        $("#Show").hide();
        $("#Hide").show();
    });

    // to samo co hide & show tylko 1 przyciskiem i działa na paragrafy
    $("#Toggle").click(function(){
        $("p").toggle("slow");
    });

    // czyszczenie konsoli; wypisywanie w konsoli; losowanie liczby i zaokrąglanie jej w dół (podłoga)
    $("#Randomizer").click(function(){
        var rand = Math.floor((Math.random() * 100) + 1);
        console.clear();
        console.log("Welcome at the game.");
        console.log("Your number is " + $("#UserNumber").val());
        console.log("Page number is " + rand);
        if($("#UserNumber").val()==rand){
            console.log("You win a " + rand + " 000 000 Dolars !!!");
        }
        else{
            console.log("You lose, but you can keep playing :D");
        }
    });
});

