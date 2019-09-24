alert ("Welkom in Weird Adventures")

//De speler kan hier zn naam invullen
var name = prompt('Wat is je spelersnaam?');
alert ("Hallo "+ name +", Welkom in Weird Adventures. In de game krijg je verschillende vragen te zien die je moet beantwoorden om naar het einde te komen. De vragen kan je beantwoorden met de cijfers: 1, 2 en 3")

//Verhaal begint hier en krijg meteen eerste vraag 1
var vraag1 = prompt("Je word opeens wakker op een onbewoond eiland. Je ligt op een strand waar niemand is, verderop staat een bos.\n\nVoer '1' in om naar het bos te gaan. \r\nVoer '2' in om op het strand te blijven.")
if (vraag1 == "1" ) {

//Vraag 1.1
var vraag1_1 = prompt("Je loopt het bos in en opeens staat er een grote beer achter je!\n\n(1) Je blijft staan!\r\n(2) Je pakt de eerste beste steen en gooit hem naar z'n hoofd!\r\n(3) Je rent op je allerhardst weg!")
}
if (vraag1_1 == "2" ) {

    alert ("Je hebt de steen naar de beer zijn hoofd gegooid, dat vond hij niet fijn ")
    }
