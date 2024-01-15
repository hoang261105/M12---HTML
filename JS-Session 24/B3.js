let a = +prompt('Nhập số a');
let b = +prompt('Nhập số b');

let arr = [a,b];
if(isNaN(a)){
    console.log("a không phải là số");
}else if(isNaN(b)){
    console.log("b không phải là số");
}else{
    let multi = a*b;
    console.log(multi);
}

