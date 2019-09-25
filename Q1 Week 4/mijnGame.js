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
var vraag1_3_1 = prompt("Je stapt het vliegtuig in. Je ziet lijken van mensen, opeens staan er zombies op!\n\n(1) Je vecht tegen de zombies.\r\n(2) Je rent het vliegtuig uit, naar het bos.")
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
var vraag1_5 = prompt("Je loopt naar de mensen toe, die kijken verschrikt! Je legt het hele verhaal uit. Van de groep mag je met hun meelopen.\n\n(1) Je loopt met de groep mee.\r\n(2) Je gaat in je eentje verder.")
}
if (vraag1_5 == "2" ) {
alert ("Je gaat verder op pad maar uit eenzaamheid trek je het niet meer...")
}
