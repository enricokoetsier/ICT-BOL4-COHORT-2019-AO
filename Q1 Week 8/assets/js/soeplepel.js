//----------Bedragen----------//
const bedragFris = 1.95;
const bedragBier = 2.55;
const bedragWijn = 2.95;
const bedragBit8 = 3;
const bedragBit16 = 5;
var fris = 0
var bier = 0
var wijn = 0
var bit8 = 0
var bit16 = 0
var eindBedrag = 0;
var maxcount = true;

//----------begin----------//
alert ("Welkom bij Cafe de soeplepel");
while (maxcount == true) {
var vraag1 = prompt ("Wat wilt u toevoegen aan u bestelling?\n\nJe kunt intypen 'fris', 'bier', 'wijn', 'bitterbal8' of 'bitterbal16'\n\nWilt u afrekenen? Voer dan 'stop' in. U eindbedrag is nu $"+eindBedrag);
if (vraag1 == "fris") {
    var fris = prompt ("Hoeveel fris wilt u? Een fris kost $1,95");
    var eindBedrag = bedragFris*fris+eindBedrag;
}
else if (vraag1 == "bier") {
    var bier = prompt ("Hoeveel fris wilt u? Een fris kost $2,55") ;
    var eindBedrag = bedragBier*bier+eindBedrag;
}
else if (vraag1 == "wijn") {
    var wijn = prompt ("Hoeveel fris wilt u? Een fris kost $2,95") ;
    var eindBedrag = bedragWijn*wijn+eindBedrag;
}
else if (vraag1 == "bitterbal8") {
    var bit8 = prompt ("Hoeveel porties bittelballen 8 stuks wilt u? Een portie kost $3,00") ;
    var eindBedrag = bedragBit8*bit8+eindBedrag;
}
else if (vraag1 == "bitterbal16") {
    var bit16 = prompt ("Hoeveel porties bittelballen 16 stuks wilt u? Een portie kost $5,00") ;
    var eindBedrag = bedragBit16*bit16+eindBedrag;
}
else if (vraag1 == "stop") {
    maxcount = false;
    alert ("U bestelling word geplaatst!");
    alert ("Cafe de soeplepel\n\rAantal fris: "+fris+ "\n\rAantal bier: "+bier+"\n\rAantal wijn: "+wijn+ "\n\rAantal bitterballen 8 stuks: "+bit8+"\n\rAantal bitterballen 16 stuks: "+bit16+"\n\nSubotaal: $"+eindBedrag);
}
else {
    alert("'U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
}
}
