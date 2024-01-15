let a = +prompt('Nhập số a');
let b = +prompt('Nhập số b');

if(a>b){
    console.log("Không hợp lệ.");
}else{
    let sum = 0, total = 0;
    for(let i=a; i<=b; i++){
        if(i%2==0){
            console.log(i);
            sum += i;
        }else{
            console.log(i);
            total += i;
        }
    }
    console.log("Tổng các số chẵn là: " +sum);
    console.log("Tổng các số lẻ là: " +total);
}

