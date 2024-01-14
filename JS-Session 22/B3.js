let num = +prompt("Nhập số 1 chính phương");

if(num<0){
    console.log("Số không phải là số chính phương");
} else{
    var Square = Math.sqrt(num);
    if(Square === Math.floor(Square)){
        console.log("Số đó là số chính phương");
    }else{
        console.log("Số đó không là số chính phương");
    }
}

// Math.floor dùng để trả về số nguyên lớn nhất nhỏ hơn hoặc bằng tham số truyền vào.