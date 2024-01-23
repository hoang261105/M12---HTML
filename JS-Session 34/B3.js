let p = document.getElementById("p");

let button = document.getElementById("button");
button.addEventListener("click", function(){
    p.innerHTML = "Text after change";
});