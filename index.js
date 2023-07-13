window.onload = function() {

let button = document.querySelector("#calculate");
button.addEventListener("click", calculateLove);
}

function calculateLove(){

let yourName = document.querySelector("#your-name").value;
let crushName = document.querySelector("#crush-name").value;

if (yourName != "" && crushName != ""){


    let percentage = Math.floor(Math.random() * 101);
    document.querySelector("#result").innerHTML = `${yourName} and ${crushName} love each other at ${percentage}%`;
}

}
