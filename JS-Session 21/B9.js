var a = +prompt('Nhập số a');
var b = +prompt('Nhập số b');
var c = +prompt('Nhập số c');

if(a>b){
    let temp = a;
    a = b;
    b = temp;
}

if(b>c){
    let temp = b;
    b = c;
    c = temp;
    if(a>b){
        let temp = a;
        a = b;
        b = temp;
    }
}


console.log("Dãy số sắp xếp theo thứ tự tăng dần: " +a, +b, +c);