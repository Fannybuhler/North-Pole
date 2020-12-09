// switch image on hover
let button = document.getElementById("button");
button.addEventListener("mouseover", function(){
    button.src = "./Images/Button pressed.png";
});

button.addEventListener("mouseout", function(){
    button.src = "./Images/Button unpressed.png"
});