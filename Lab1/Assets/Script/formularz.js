document.getElementById("Tytul").style.textAlign="Center";

document.getElementsByTagName("body")[0].style.backgroundSize="100%";

function sprawdz(formularz)
{
	for (i = 0; i < formularz.length; i++)
	{
		var pole = formularz.elements[i];
		if ((pole.type == "text" || pole.type == "password") && pole.value == "")
		{
			alert("Proszę wypełnić wszystkie pola!");
			return false;
        }
    }
    if(document.getElementById("regulamin").checked == false){
        alert("Proszę zaakceptowac regulamin!");
    }
    console.log("Poprawne wczytanie danych");
	return true;
}