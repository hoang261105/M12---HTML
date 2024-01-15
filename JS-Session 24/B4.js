let n = +prompt('Nhập số n');
let square = 1;
let sum = 0;

if(n<0){
    console.log("Vui lòng nhập lại");
}else{
    for(let i=1; ;i++){
        if(i%2===0){
            square = i**2;
            sum += square;
            if(sum <= n){
                console.log("Tổng các số in ra là: " +sum + " < " +n);
            }
        }
        if(square >= n){
            break;
        }
    }
}

