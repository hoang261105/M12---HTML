function User(id, user_name, email, password) {
    this.id = id;
    this.user_name = user_name;
    this.email = email;
    this.password = password;   
}

function checkName(user_name, email, password) {
    if(user_name.length < 3){
        console.log("Vui lòng nhập lại");
        return false;
    }
    if(user_name.trim().length !== user_name.length){
        console.log("Tên có khoảng trống. Vui lòng nhập lại");
        return false;
    }
    if(email.indexOf('@') === -1 && email.indexOf('.') === -1){
        console.log("Email không hợp lệ. Vui lòng nhập lại");
        return false;
    }
    if(password.length < 8){
        console.log("Mật khẩu quá ngắn. Vui lòng nhập lại mk");
        return false;
    }
    return true;
}

let id = +prompt("Nhập id");
let user_name = prompt("Nhập tên");
let email = prompt("Nhập email");
let password = prompt("Nhập mật khẩu");

// if(checkName(user_name, email, password)){
//     let newUser = new User(id, user_name, email, password);
//     console.log(newUser);
// }

let isValid = checkName(id, user_name, email, password)

// Tạo mảng chứa lỗi
// Đưa vào vòng lặp while vói điều kiện dừng là mảng lỗi rỗng
// Nhập các giá trị và kiểm tra điều kiện, nếu điều kiện sai thì sẽ push vào mảng lỗi



