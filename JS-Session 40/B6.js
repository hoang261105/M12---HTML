let $ = document.querySelector.bind(document);

$("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    SignOut();
});

function SignOut(){
    const account = $("#userName").value;
    const password = $("#password").value;

    if(!account || !password){
        alert("Không để trống");
    }else{
        const userList = JSON.parse(localStorage.getItem("users")) || [];
        const user = userList.find((user) => user.username === account && user.password === password);

        if(user){
            alert("Đăng nhập thành công");
            const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
            if (currentUser) {
                console.log(currentUser.username); // In ra tên người dùng
                console.log(currentUser.password); // In ra mật khẩu
            }
            sessionStorage.setItem("currentUser", JSON.stringify(user));
        }else{
            alert("Đăng nhập không thành công");
        }
    }
    
}