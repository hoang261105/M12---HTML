let $ = document.querySelector.bind(document);
// let $$ = document.querySelectorAll.bind(document);

function addFootball(){
    let inputValue = $("#inputValue").value;
    if(!inputValue){
        alert("Không được để trống");
    }else{
        const idNum = Math.ceil(Math.random() * 1000000);

        const player = {
            name: inputValue,
        };

        localStorage.setItem(idNum, JSON.stringify(player));
    }
}

$("form").addEventListener("submit", (e) => {
    e.preventDefault();
    addFootball();
});

for(let i=0; i<localStorage.length; i++){
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    console.log(key);
    console.log(value);
}

function deletePlayer(){
    let deleteValue = $("#deleteValue").value;
    if(!deleteValue){
        alert("Không được để trống");
    }else{
        for(let i=0; i<localStorage.length; i++){
            if(localStorage.getItem(deleteValue)){
                localStorage.removeItem(deleteValue);
                alert("Cầu thủ được xóa thành công");
            }else{
                alert("Không tìm thấy");
            }
        }
    }
}
