function isPrimeNum(n){
    if(n<2){
        return 0;
    }
    let i;
    let squareRoot = Math.sqrt(n);
    for(i=2; i<=squareRoot; i++){
        if(n%i==0){
            return 0;
        }
    }
    return 1;
}

let n = +prompt('Nhập n');
console.log(+n + " số nguyên tố đầu tiên là");
let count = 0;
let i = 2;
while(count<n){
    if(isPrimeNum(i)){
        console.log(i);
        count++;
    }
    i++;
}