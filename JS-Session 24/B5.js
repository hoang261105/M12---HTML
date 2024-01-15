let n = +prompt('Nhập số n');
var sum = 1;


if(n<=0){
    console.log("Vui lòng nhập lại");
}else{
    for(let i=2; i<=n; i++){
        let term = 1/Math.pow(i,3);
        sum += term;
    }
    let total = sum.toFixed(5);
    console.log(total);
}
