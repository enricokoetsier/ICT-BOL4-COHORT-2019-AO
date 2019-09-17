const ZITPLAATSEN = 28;

alert ("Welkom bij het zitplaatsen systeem van de Python");
var amountStandby = parseInt(prompt("Hoeveel personen Standby?"));
var amountInvalide = parseInt(prompt("Hoeveel invalides? (met begleiders)"));
var total = amountStandby + amountInvalide;
var eindTotal = ZITPLAATSEN-total;

document.write ("U heeft " + total + "/28 van de stoelen gevuld"+"<br>");
document.write ("U kunt " + eindTotal + " personen uit de single rider toevoegen!");