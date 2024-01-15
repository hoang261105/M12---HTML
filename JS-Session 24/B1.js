let n = +prompt('Nhập số nguyên dương n');

let multi;
if(n<=0){
    console.log('Vui lòng nhập lại');
}else{
    for(let i=1; i<=n; i++){
        if(i%2===0){
            multi = i**2;
            console.log(+i +" ^ " +2 + " = " +multi);
        }
        
    }
}

