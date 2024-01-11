//Câu lệnh if-else
// Đánh giá một điều kiện và đưa ra lựa chọn thực thi một khối lệnh dựa trên điều kiện đó

// Nếu điều kiện có giá trị đúng (true) thì khối lệnh bên trong if sẽ được thực thi

// Nếu điều kiện có giá trị sai (false) thì khối lệnh bên trong else sẽ được thực thi

//Vd:
let age = 18;
if(age>=14){
    console.log("Đã đủ tuổi làm CCCD");
}else{
    console.log("Chưa đủ tuổi làm CCCD")
}

//Câu lệnh switch-case

// switch-case là một cấu trúc điều kiện cho phép lựa chọn thực thi các khối lệnh khác nhau dựa trên kết quả của việc so sánh

// switch-case so sánh giá trị của một biến với lần lượt từng giá trị một, nếu có giá trị phù hợp với biến thì khối lệnh tương ứng sẽ được thực thi

// switch-case không thể thay thế if-else trong tất cả các trường hợp

// Cấu trúc điều khiển switch...case trong JavaScript cung cấp một cách linh hoạt để thực hiện các câu lệnh dựa trên giá trị của biểu thức

//Vd:

let num = 3;
switch(num){
    case 1:
        console.log("Đây là số 1");
        break;
    case 2:
        console.log("Đây là số 2");
        break;
    case 3:
        console.log("Đây là số 3");
        break;
    case 4:
        console.log("Đây là số 4");
        break;
    default:
}
