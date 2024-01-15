
function isPrime(n){
    let flag = 1;
    if(n<2){
        return flag = 0;
    }
    let i =2;
    while(i<n){
        if(n%i==0){
            flag = 0;
            break;
        }
        i++;
    }
    return flag;
}

let n = +prompt('Nhập số n');
let check = isPrime(n);
if(check === 1){
    console.log(+n + " là số nguyên tố");
}else{
    console.log(+n + " không là số nguyên tố");
}