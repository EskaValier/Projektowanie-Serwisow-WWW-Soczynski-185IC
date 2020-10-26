document.getElementsByTagName("body")[0].style.backgroundSize="100%";

document.getElementById("formula").style.marginRight="25%";
document.getElementById("formula").style.marginLeft="25%";

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
	
	if(document.getElementById("defaultRegisterFormPassword").textContent != document.getElementById("defaultRegisterFormRepeatPassword").textContent){
		alert("Proszę wprowadzić to samo hasło w obu miejscach");
		return false;
	}

    if(document.getElementById("regulamin").checked == false){
		alert("Proszę zaakceptowac regulamin!");
		return false;
    }
    console.log("Poprawne wczytanie danych");
	return true;
}
