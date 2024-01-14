let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");

if(a%b===0){
    console.log(+a + " chia hết cho " +b);
}else if(b%a===0){
    console.log(+b + " chia hết cho " +a);
}else if(a%b!==0){
    console.log(+a + " không chia hết cho " +b);
}else{
    console.log(+b + " không chia hết cho " +a);
}