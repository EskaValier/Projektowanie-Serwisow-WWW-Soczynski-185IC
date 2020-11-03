let x = document.getElementsByClassName("badge-light");
x[0].innerHTML = 6; // x[0] to pierwszy znaleziony element

var paragrafy = document.getElementsByTagName("p");
for (i = 0; i < paragrafy.length; i++){
    paragrafy[i].style.marginTop="10px";
    paragrafy[i].style.marginBottom="10px";
}

$(document).ready(function(){
    $("#ShowTekst").click(function(){
      console.log("Text: " + $("#test").text());
    });

    $("#ShowHTML").click(function(){
      console.log("HTML: " + $("#test").html());
    });

    $("#notifications").click(function(){
        console.log("There will be notification button function");
    });

    $("#tekst").click(function(){
        console.log("Welcome " + $("#imie").val());
    });

    $("#AddTekst").click(function(){
        $("p").append(" <b>Added text</b>.");
    });
      
    $("#AddListItems").click(function(){
        $("ol").append("<li>Added item</li>");
    });
});