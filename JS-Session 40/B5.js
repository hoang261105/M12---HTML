let $ = document.querySelector.bind(document);
let listUserName = JSON.parse(localStorage.getItem("jobs")) || [];

$("#form").addEventListener('submit', (e) => {
    e.preventDefault();
    SignUp();
});

function SignUp(){
    const nameValue = $("#userName").value;
    const passwordValue = $("#password").value;

    if(!nameValue || !passwordValue){
        alert("Vui lòng không để trống");
    }else{
        const Signup = {
            username: nameValue,
            password: passwordValue,
        }

        listUserName.push(Signup);

        localStorage.setItem("Signup", JSON.stringify(listUserName));
        alert("Đăng kí thành công");
        clearForm();
    }  
}

function clearForm(){
    $("#userName").value = "";
    $("#password").value = "";
}