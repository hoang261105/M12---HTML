let $ = document.querySelector.bind(document);
let username = [];


$("#form").addEventListener('submit', (e) => {
    e.preventDefault();
});

function addName(){
    const nameInput = $("#input").value;

    localStorage.setItem("user", nameInput);
    $("#input").value = "";

    let Output = document.getElementById("output");
    Output.textContent = "Tên người dùng: " +nameInput;

    let addName = document.getElementById("addname");
    let deleteName = document.getElementById("delete");
    addName.style.display = "none";
    deleteName.style.display = "block";
}

function deleteValue(){
    localStorage.removeItem("user");
    var addName = document.getElementById("addname");
    addName.style.display = "block";
}

window.addEventListener("load", function(){
    var inputValue = localStorage.getItem("user");
    if(inputValue){
        $("#output").textContent = "Tên người dùng: " +inputValue;
        let addName = document.getElementById("addname");
        let deleteName = document.getElementById("delete");
        addName.style.display = "none";
        deleteName.style.display = "block";
    }else{
        let addName = document.getElementById("addname");
        addName.style.display = "block";
    }
})