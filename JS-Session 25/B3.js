let n = parseInt(prompt("Nhập số nguyên dương n:"));
let sum = 0;
let m = 1;

if(n<=0){
    console.log("Vui long nhập lại.");
}else{
   while (sum + m < n) {
       sum += m;
       m++;
    }
    
    console.log("Giá trị m tìm được là: " + (m - 1)); 
}
