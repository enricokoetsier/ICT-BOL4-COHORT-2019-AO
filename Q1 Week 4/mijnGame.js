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
alert ("Je hebt de steen naar de beer zijn hoofd gegooid, dat vond de beer niet zo pretting, hij valt je aan! Van de wonden ga je dood.")
}
else if (vraag1_1 == "3" ) {
alert ("Je rent weg, maar je struikelt over een tak! Van de pijn kom je niet meer overeind en opeens staat de beer naast je... Je bent dood.")
}
else if (vraag1_1 == "1" ) {
//Vraag 1.2
var vraag1_2 = prompt("Je blijft staan, maar de beer komt op je af. Opeens van links komt er een tijger tevoorschijn. De tijger ziet de beer en gaat er op af.\n\n(1) Je gaat meevechten!\r\n(2) Je rent verder het bos in.")
}
if (vraag1_2 == "1" ) {
alert ("Voor dat je al een ram kon uitdelen, pakte de teiger bij je arm! Je arm ligt er half af, je roept om hulp, maar er komt niemand. Je sterft uiteindelijk.")
}
else if (vraag1_2 == "2" ) {
//vraag 1.3
var vraag1_3 = prompt("Je rent het bos in. Na 2 min heb je geen energie meer over. Je ziet daar een neergestord vliegtuig!\n\n(1) Je gaat naar het vliegtuig.\r\n(2) Je loopt verder.")
}
if (vraag1_3 == "1" ) {
//vraag 1.3.1
var vraag1_3_1 = prompt("Je stapt het vliegtuig in. Je ziet daar een briefje met daarop een codewoord 'ZOMBIE'. Je ziet ook lijken van mensen, opeens staan er zombies op!\n\n(1) Je vecht tegen de zombies.\r\n(2) Je rent het vliegtuig uit, naar het bos.")
}
if (vraag1_3_1 == "1" ) {
alert ("De zombies zijn sterker dan gedacht, je word met huid en haar verslonden!")
}
else if (vraag1_3_1 == "2" ) {
//vraag 1.4
var vraag1_4 = prompt("Je rent verder het bos in. Je verschuilt je achter een boomstronk, want verderop staat een groepje mensen. Het lijkt er op dat het vliegtuig van hun is.\n\n (1) Je gaat naar het groepje mensen.\r\n (2) Je gaat verder op pad.")
}
else if (vraag1_3 == "2" ) {
var vraag1_4 = prompt("Je loopt verder, maar je hoord opeens luid gepraat. Je verschuilt je achter een boomstronk, want verderop staat een groepje mensen. Het lijkt er op dat het vliegtuig van hun is.\n\n (1) Je gaat naar het groepje mensen.\r\n (2) Je gaat verder op pad.")
}
if (vraag1_4 == "2" ) {
alert ("Je gaat verder op pad maar uit eenzaamheid trek je het niet meer...")
}
else if (vraag1_4 == "1" ) {
//vraag 1.5
var vraag1_5 = prompt("Je loopt naar de mensen toe, die kijken verschrikt! Je legt het hele verhaal uit. Van de groep mag je met hun meelopen. Want hun zoeken ook de weg naar huis!\n\n(1) Je loopt met de groep mee.\r\n(2) Je gaat in je eentje verder.")
}
if (vraag1_5 == "2" ) {
alert ("Je gaat verder op pad maar uit eenzaamheid trek je het niet meer...")
}
else if (vraag1_5 == "1" ) {
//vraag 1.6
var vraag1_6 = prompt("Je loopt verder mee met de groep. Er vliegt een helicopter boven het eiland, jullie schreeuwen zo hard als jullie kunnen. Iemand heeft een signaalvlam. \n\n(1) Hij steekt hem af! \r\n(2) Jullie wachten, misschien heeft de helikopter jullie toch gezien.")
}
if (vraag1_6 == "1" ) {
//vraag1.6.1
var vraag1_6_1 = prompt("Hij steekt de vlam aan, opeens daarna horen je een luid gebrul. Er staat opeens een T-rex achter jullie groep! De groep rent weg met de signaalvlam nog beet.\n\n(1) Je rent achter hun aan.\r\n(2) Je schuilt achter een boomstronk.")
}
if (vraag1_6_1 == "1" ) {
alert ("De T-rex komt achter jullie aan, jullie worden één voor één verslonden!")
}
else if (vraag1_6_1 == "2" ) {
alert ("Je duikt snel achter een boomstronk. Je overleeft met maar, je gaat verder op pad, uit eenzaamheid trek je het niet meer...")
}
else if (vraag1_6 == "2" ) {
//vraag 1.7
var cijfer= prompt("De helikopter had jullie gezien, jullie worden opgehaald. Aan boord word het aan jullie gevraagd om een getal te noemen kleiner dan 9. (Noem een getal kleiner dan 9)")
alert(cijfer<9);
}
if (cijfer < 9 ) {
    //Het spel is gewonnen
alert ("Beste "+ name +", u heeft het spel gewonnen en uitgespeeld!")
}
if (cijfer > 10 ) {
    //Het is spel is niet behaald
    alert ("Het antwoord is fout, jij en de hele groep word uit de helikopter gegooid. Je bent dood.")
    }

//Hier gaat het verhaal verder vanaf vraag 1, optie 2

else if (vraag1 == "2" ) {
    //vraag 2.1
    var vraag2_1 = prompt("Je blijft op het strand.\n\n(1) Je neemt een frisse duik in het water.\r\n(2) Je gaat op zoek naar voedsel.")
    }
if (vraag2_1 == "1" ) {
    alert ("Je neemt een duik in het water, je weet alleen niet wat hier zwemt dus! Je word aangevallen door een haai.")
    }
else if (vraag2_1 == "2" ) {        
    //Speciale code vraag
    var code = prompt("Je gaat opzoek naar eten, maar je komt opeens een toetsenbord tegen waar op staat 'Typ hier uw code in', heeft u geen code druk dan 'f5' in!")
    }
if (code == "ZOMBIE" ) {
    //De sluiproute is ontgrendelt
    alert ("U heeft de code correct, u heeft nu toegang tot de sluiproute! Er komt een helikopter aan die u bevrijd!")
    alert ("Beste "+ name +", u heeft het spel uitgespeeld en gewonnen!")
    }


//Ongeldig teken
else {
alert ("Ongeldig teken, begin opnieuw met 'f5'")
    }