var title = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.createElement("BUTTON");
var button5 = document.createElement("BUTTON");
var twinkeltoorts = 0
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
}
//Ontvang twinkeltoorts
function ontvang() {
    console.log("Ontvang twinkeltoorts");
    description.innerHTML = "+1 twinkeltoorts";

    button1.setAttribute("onclick", "menu()");
    button1.innerHTML = "Ga terug naar het menu";

    var twinkeltoorts = 1+twinkeltoorts;
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
    button1.innerHTML = "Ga hier terug naar het menu";

    button2.style.display = "none";
    
}
//Baron 1898
function baron() {
    console.log("Joris en de Draak, keuze");
    document.body.style.backgroundImage = "url('assets/img/baron_gebouw.jpg')";
    title.innerHTML = "Baron 1898";
    description.innerHTML = "U bent door Gustave Hoogmoed uitgenodigd om een kompel te worden in zijn mijn. Durf jij mee te gaan?";

    button3.style.display = "none"; //inline
    button4.style.display = "none";
    button5.style.display = "none";

    button1.setAttribute("onclick", "baron_mee()");
    button1.innerHTML = "Ga naar de mijn";

    button2.setAttribute("onclick", "menu()");
    button2.innerHTML = "Terug gaan";
}

start();
