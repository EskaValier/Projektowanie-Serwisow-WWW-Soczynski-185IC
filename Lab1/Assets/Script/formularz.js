document.getElementById("Tytul").style.textAlign="Center";

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
	return true;
}