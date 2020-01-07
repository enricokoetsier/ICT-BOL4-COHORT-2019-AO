var random  = Math.floor(Math.random() * words.length);
var answer = words[random];
var first = answer.charAt(0);
var count = 0;
var split = answer.split()

function begin () {
    document.getElementById("letter0_0").value = first;
}
begin()
console.log(answer)

function check() {
    var input;
    for(i = 0; i < 5; i++) {
        input = document.getElementById("letter"+count+"_"+i);
        if (split.includes(input.value)){
            input.style.backgroundColor = "yellow";
        }
        if(input.value === split[i]){
            input.style.backgroundColor = "red";
        }
    }
}
