# Projektowanie-Serwisow-WWW-Soczynski-185IC

**Lab3 - Obsługa zdarzeń**

*w ramach praktyki do wykonania zadania z JavaScript - 9 zadań:

*za pomocą metody addEventListener należy obsłużyć 10 różnych wybranych zdarzeń

**Zadania**

-Zadanie 1
Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.
Funkcja niech ZWRACA tekst Liczba liter: .... gdzie .... to liczba liter tekstu. Wynik jej użycia wypisz w konsoli za pomocą console .info()

-Zadanie 2
Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę. Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.

-Zadanie 3
Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:

input -> Ala ma kota
output -> AlA Ma kOtA

-Zadanie 4
Napisz funkcje, która będzie wymagać 2 atrybutów. Funkcja niech sprawdza, czy oba atrybuty są liczbami. Funkcja ma zwracać iloczyn (*) obu liczb. Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.

-Zadanie 5
Napisz funkcje, która przyjmuje 2 parametry:

imię - np: Ala
miesiac - np: styczen
Funkcja ma zwracac:

-jezeli miesiac to grudzien, styczen, luty: "Ala jezdzi na sankach"
-jezeli miesiac to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
-jezeli miesiac to czerwiec, lipiec, sierpien: "Ala sie opala"
-jezeli miesiac to wrzesien, pazdziernik, listopad: "Ala zbiera liscie"
Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.

Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami. Jeżeli miesiac jest "innym słowem", funkcja niech zwraca "Ala uczy się JS"

-Zadanie 6
Mamy przykładowy tekst:

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
Napisz funkcję, która przyjmie 2 atrybuty: tekst oraz znak rozdziału (np. |)

Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

input -> "Ania|Marcin|Bartek" output -> "Ania|Bartek|Marcin"

-Zadanie 7
Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.

input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]

-Zadanie 8
Napisz funkcję checkFemale, która sprawdza przekazane do niej imię. Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a" to jest to żeńskie imię, w przeciwnym wypadku męskie. Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie. Przykładowo:

checkFemale("Ania") === true
checkFemale("Marcin") === false

-Zadanie 9
Napisz funkcję countWomanInTable(arr), do której przekażesz tablicę userów, którą masz poniżej. Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet. 


**Widok strony oraz wynik działania skryptów**