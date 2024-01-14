let num = +prompt('Nhập vào 1 số bất kỳ');

let sum = 0;
for(let i=0; i<num; i++){
    if(num%i===0){
        sum+=i;
    }
}

if(sum == num){
    console.log("Đây là số hoàn hảo");
}else{
    console.log("Đây không là số hoàn hảo");
}