let x = document.getElementsByClassName("badge-light");
x[0].innerHTML = 6; // x[0] to pierwszy znaleziony element

var paragrafy = document.getElementsByTagName("p");
for (i = 0; i < paragrafy.length; i++){
    paragrafy[i].style.marginTop="10px";
    paragrafy[i].style.marginBottom="10px";
}

var li = document.getElementsByTagName("li");
for (i = 0; i < li.length; i++){
    "use strict";
    li[i].style.marginTop="10px";
    li[i].style.marginBottom="10px";
}

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

    $("#ColorButton").click(function(){
        $("button").css("background-color", "green");
    });
});