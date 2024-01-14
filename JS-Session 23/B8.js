let num = +prompt('Nhập 1 số');

var check = 1;

for(let i=1; i<=num; i++){
    for(let j=2; j<=i-1; j++){
        if(i%j==0){
            check = 0;
        }
    }
    if(check == 1){
        console.log("Các số nguyên tố từ 1 đến " +num + " là: " +i);
    }
    check = 1;
}
