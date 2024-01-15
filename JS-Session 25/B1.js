let num = +prompt('Nhập 1 số');
let sum = 0;

for(let i=1; i<=num; i++){
    sum += i; 
    if (sum %2 !== 0){
        console.log(sum);
    }
}

