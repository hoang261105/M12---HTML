let a = +prompt('Nhập a');
let b = +prompt('Nhập b');

let calculate = prompt("Nhập phép tính");

if (isNaN(a)) {
    console.log(`${a} không phải là số`);
  } else if (isNaN(b)) {
    console.log(`${b} không phải là số`);
}else{
    switch(calculate){
        case "+":
            let sum = a + b;
            console.log(sum);
            break;
        case "-":
            let diff = a - b;
            console.log(diff);
            break;
        case "*":
            let multi = a*b;
            console.log(multi);
            break;
        case "/":
            let div = a/b;
            if(b===0){
                console.log("Phép tính không hợp lệ");
            }else{
                console.log(div);
            }
            break;
        default:
            console.log("Không hợp lệ");
    }
}



