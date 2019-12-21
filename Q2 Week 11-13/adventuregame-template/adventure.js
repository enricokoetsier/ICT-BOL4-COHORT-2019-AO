var title = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.createElement("BUTTON");
var button5 = document.createElement("BUTTON");
var teller = document.createElement("DIV");
var twinkeltoorts = 0
var img = document.getElementById("inventoryItem")
//Hoofdmenu before game
function start() {
    title.innerHTML = "Welkom in Efteling the Game";
    description.innerHTML = "In Efteling the Game verzamel je 4 twinkeltoortsen en daarmee ontgrendel je Symbolica. Klik op start om het spel te starten.";
    document.body.style.backgroundImage = "url('assets/img/ingang.jpg')";

    button1.setAttribute("onclick", "menu()");
    button1.innerHTML = "Start het spel";

    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";
    img.style.display = "none";
    console.log("Hoofdmenu")
}
//Ontvang twinkeltoorts
function ontvang() {
    description.innerHTML = "+1 twinkeltoorts";

    button1.setAttribute("onclick", "menu()");
    button1.innerHTML = "Ga terug naar het menu";

    twinkeltoorts = twinkeltoorts+1;
    teller.innerHTML = "Twinkeltoortsen: "+twinkeltoorts;
    console.log("Ontvang twinkeltoorts "+twinkeltoorts);
}
//Start spel
function menu() {
    console.log("Menu");

    button2.style.display = "inline";
    button3.style.display = "inline";
    button4.style.display = "inline";
    button5.style.display = "inline";

    title.innerHTML = "Efteling the Game";
    description.innerHTML = "Kies een attractie en ga het avontuur aan. Verzamel twinkeltoortsen en ontgrendel Symbolica!";
    document.body.style.backgroundImage = "url('assets/img/parkmap.png')";

    button1.setAttribute("onclick", "jedd()");
    button1.innerHTML = "Joris en de Draak";

    button2.setAttribute("onclick", "baron()");
    button2.innerHTML = "Baron 1898";

    button3.setAttribute("onclick", "vogelrok()");
    button3.innerHTML = "Vogel Rok";

    button4.setAttribute("onclick", "pirana()");
    button4.innerHTML = "Piraña";
    document.getElementById("game-buttons").appendChild(button4);

    button5.setAttribute("onclick", "symbolica()");
    button5.innerHTML = "Symbolica";
    document.getElementById("game-buttons").appendChild(button5);
    button5.style.marginLeft = "5px";

    img.src = "assets/img/twinkeltoorts.png";
    img.style.display = "inline";

    teller.innerHTML = "Twinkeltoortsen: "+twinkeltoorts;
    document.getElementById("game-container").appendChild(teller);
}
function jedd() {
    console.log("Joris en de Draak, keuze");
    document.body.style.backgroundImage = "url('assets/img/jedd_keuze.jpg')";
    title.innerHTML = "Joris en de Draak";
    description.innerHTML = "Kies hier welke achtbaan je wilt doen!";

    button3.style.display = "none"; //inline
    button4.style.display = "none";
    button5.style.display = "none";

    button1.setAttribute("onclick", "jedd_water()");
    button1.innerHTML = "Water";

    button2.setAttribute("onclick", "jedd_vuur()");
    button2.innerHTML = "Vuur";
} 
function jedd_water() {
    console.log("Joris en de Draak, water");
    document.body.style.backgroundImage = "url('assets/img/water.jpg')";
    description.innerHTML = "Wat goeeed! Je hebt de strijd tegen de draak en elkaar gewonnen! Bij deze ontvang je van de koning een twinkeltoorts";

    button1.setAttribute("onclick", "ontvang()");
    button1.innerHTML = "Ontvang hier je twinkeltoorts";

    button2.style.display = "none";
}
function jedd_vuur() {
    console.log("Joris en de Draak, vuur");
    document.body.style.backgroundImage = "url('assets/img/vuur.jpg')";
    description.innerHTML = "Wat jammer, je hebt de strijd verloren en je troostprijs is opnieuw beginnen.";

    button1.setAttribute("onclick", "menu()");
    button1.innerHTML = "Respawn";

    button2.style.display = "none";
    
}
//Baron 1898
function baron() {
    console.log("Baron");
    document.body.style.backgroundImage = "url('assets/img/baron_gebouw.jpg')";
    title.innerHTML = "Baron 1898";
    description.innerHTML = "U bent door Gustave Hoogmoed uitgenodigd om een kompel te worden in zijn mijn. Durf jij mee te gaan?";

    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";

    button1.setAttribute("onclick", "baron_mee()");
    button1.innerHTML = "Ga naar de mijn";

    button2.setAttribute("onclick", "menu()");
    button2.innerHTML = "Terug gaan";
}
function baron_mee() {
    console.log("Baron afdaling")   
    document.body.style.backgroundImage = "url('assets/img/baron_station.jpg')";
    description.innerHTML = "Je arriveert beneden, je zoekt naar goud, maar daar komen de witte wieven op je af, je rent weg en komt in allemaal gangen!";
    
    button1.setAttribute("onclick", "baron_uitgang()");
    button1.innerHTML = "Zoek naar een uitgang";

    button2.setAttribute("onclick", "baron_dood()");
    button2.innerHTML = "Vecht tegen de witte wieven";
}
function baron_dood() {
    console.log("Baron dood")   
    document.body.style.backgroundImage = "url('assets/img/sterren.jpg')";
    description.innerHTML = "Het vechten tegen de witte wieven overleef je niet...";
    
    button1.setAttribute("onclick", "menu()");
    button1.innerHTML = "Respawn";

    button2.style.display = "none";
}
function baron_uitgang() {
    console.log("Baron overleeft")   
    document.body.style.backgroundImage = "url('assets/img/baron_invaliden.jpg')";
    description.innerHTML = "Je vind een uitweg in de gangen en je ontsnapt. Je hebt net genoeg goud kunnen vinden om het goud om te ruilen in een twinkeltoorts.";
    
    button1.setAttribute("onclick", "ontvang()");
    button1.innerHTML = "Ruil je geld voor een twinkeltoorts";

    button2.style.display = "none";
}
//Vogel Rok
function vogelrok() {
    console.log("Vogel Rok");
    document.body.style.backgroundImage = "url('assets/img/vr_ingang.jpg')";
    title.innerHTML = "Vogel Rok";
    description.innerHTML = "Je loopt in de wachtrij en ziet dat er 0 min wachtrij staat, en je stapt achterin het treintje. ";

    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";

    button1.setAttribute("onclick", "vr_unox()");
    button1.innerHTML = "Je kwant vogelrok";

    button2.setAttribute("onclick", "vr_dood()");
    button2.innerHTML = "Zet de onride muziek uit";
}
function vr_dood() {
    console.log("Vogel Rok, dood")   
    document.body.style.backgroundImage = "url('assets/img/vr_dood.jpg')";
    description.innerHTML = "Je zet de muziek uit en je maakt een ritje, een medewerker komt er achter dat je de muziek hebt uitgezet en vermoord je.";
    
    button1.setAttribute("onclick", "menu()");
    button1.innerHTML = "Respawn";

    button2.style.display = "none";
}
function vr_unox() {
    console.log("Vogel Rok, unox")   
    document.body.style.backgroundImage = "url('assets/img/unox.jpg')";
    description.innerHTML = "Na 10 ritjes vogel rok word je erg misselijk. Je gaat naar de unox kraam en bestelt daar een broodje unox. Van die mevrouw krijgt je er een twinkeltoorts bij!";
    
    button1.setAttribute("onclick", "ontvang()");
    button1.innerHTML = "Ontvang hier je broodje unox";

    button2.style.display = "none";
}
//Piraña
function pirana() {
    console.log("Piraña");
    document.body.style.backgroundImage = "url('assets/img/pirana_ingang.jpg')";
    title.innerHTML = "Piraña";
    description.innerHTML = "Het is 5 graden buiten en jij gaat in Piraña, je neemt plaats in een van de bootjes en drijft het water op. Opeens komen er Inca’s en die werpen stenen op jouw. ";

    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";

    button1.setAttribute("onclick", "pr_dood()");
    button1.innerHTML = "In het bootje blijven";

    button2.setAttribute("onclick", "pr_leven()");
    button2.innerHTML = "Spring uit het bootje";
}
function pr_dood() {
    console.log("Piraña, dood")   
    document.body.style.backgroundImage = "url('assets/img/eiland.jpg')";
    description.innerHTML = "Er komen piraña’s op je af en bijten je bootje kapot.";
    
    button1.setAttribute("onclick", "menu()");
    button1.innerHTML = "Respawn";

    button2.style.display = "none";
}
function pr_leven() {
    console.log("Piraña, leven")   
    document.body.style.backgroundImage = "url('assets/img/eiland.jpg')";
    description.innerHTML = "Je springt uit het bootje, daar beland je op een rots daar liggen allemaal kleine rotjes en gooi je de rotjes naar de Inca’s die uiteindelijk sterven en jij terug in een bootje springt, waardoor je een twinkeltoorts ziet liggen!";
    
    button1.setAttribute("onclick", "ontvang()");
    button1.innerHTML = "Pak de twinkeltoorts";

    button2.style.display = "none";
}
//Symbolica
function symbolica() {
    console.log("Symbolica");
    title.innerHTML = "Symbolica";

    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    button5.style.display = "none";

    if (twinkeltoorts >= 4 ) {
        document.body.style.backgroundImage = "url('assets/img/sym_dans.jpg')";
        description.innerHTML = "Gefeliciteerd! Je hebt het spel gehaald!";
        button1.style.display = "none";
    }
    else {
        description.innerHTML = "Je kan Symbolica nog niet betreden, je hebt 4 twinkeltoortsen nodig. Je hebt op dit moment "+twinkeltoorts+" van de 4 twinkeltoortsen.";
        document.body.style.backgroundImage = "url('assets/img/sym_deuren.jpg')";
        button1.setAttribute("onclick", "menu()");
        button1.innerHTML = "Ga terug";
    }
}
start();