/*text switcher*/  
let text = [ "web developer", "construction worker"];
let counter = 0;
setInterval(change, 500);

function change() {
    document.getElementById("fadeEl").innerHTML = text[counter];
    counter++;
    if(counter >= text.length) {
        counter = 0;
    }
}