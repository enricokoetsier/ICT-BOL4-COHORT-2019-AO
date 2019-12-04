var title = document.getElementById("title")
var description = document.getElementById("description")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.createElement("BUTTON");
var button5 = document.createElement("BUTTON");

function start() {
    title.innerHTML = "Welkom in Efteling the Game"
    description.innerHTML = "In Efteling the Game verzamel je 4 twinkeltoortsen en daarmee ontgrendel je Symbolica. Klik op start om het spel te starten."
    document.body.style.backgroundImage = "url('assets/img/parkmap.png')";
}

function menu() {
    title.innerHTML = "Welkom in Efteling the Game"
    description.innerHTML = "Kies een attractie en ga het avontuur aan. Verzamel twinkeltoortsen en ontgrendel Symbolica!"
    document.body.style.backgroundImage = "url('assets/img/parkmap.png')";

    button1.setAttribute("onclick", "jedd()")
    button1.innerHTML = "Joris en de Draak";

    button2.setAttribute("onclick", "baron()")
    button2.innerHTML = "Baron 1898";

    button3.setAttribute("onclick", "vogelrok()")
    button3.innerHTML = "Vogel Rok";

    button4.setAttribute("onclick", "pirana()")
    button4.innerHTML = "Piraña";
    document.getElementById("game-buttons").appendChild(button4);

    button5.setAttribute("onclick", "symbolica()")
    button5.innerHTML = "Symbolica";
    document.getElementById("game-buttons").appendChild(button5);
    button5.style.marginLeft = "5px"
}
menu();
function jedd() {
    document.body.style.backgroundImage = "url('assets/img/jedd_keuze.jpg')";
    title.innerHTML = "Joris en de Draak"
    description.innerHTML = "Kies hier welke achtbaan je wilt doen!"

    button3.style.display = "none" ///inline
    button4.style.display = "none"
    button5.style.display = "none"

    button1.setAttribute("onclick", "jedd_water()")
    button1.innerHTML = "Water";

    button2.setAttribute("onclick", "jedd_vuur()")
    button2.innerHTML = "Vuur";
} 
function jedd_water() {
    document.body.style.backgroundImage = "url('assets/img/water.jpg')";
    description.innerHTML = "Wat goeeed! Je hebt de strijd tegen de draak en elkaar gewonnen! Bij deze ontvang je van de koning een twinkeltoorts"
}
function jedd_vuur() {
    document.body.style.backgroundImage = "url('assets/img/vuur.jpg')";
    description.innerHTML = "Wat jammer, je hebt de strijd verloren en je troostprijs is opnieuw beginnen. (begin opnieuw door 'Ctrl + r')"
}
function jedd_ontvang() {
    description.innerHTML = "+1 twinkeltoorts"
}