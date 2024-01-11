let weight = +prompt("Nhập cân nặng");
let height = +prompt("Nhập chiều cao");

let bmi = parseFloat(weight / (height**2));

let roundbmi = bmi.toFixed(1);
console.log("Chỉ số BMI là: " +roundbmi);
if(roundbmi<18.5){
    console.log("Cân nặng thấp");
}else if(roundbmi>=18.5 && roundbmi<25){
    console.log("Bình thường");
}else if(roundbmi>=25){
    console.log("Thừa cân");
}else if(roundbmi>25 && roundbmi<=29.9){
    console.log("Tiền béo phì");
}else if(roundbmi>=30 && roundbmi<34.9){
    console.log("Béo phì độ 1");
}else if(roundbmi>=35 && roundbmi<=39.9){
    console.log("Béo phì độ 2");
}else{
    console.log("Béo phì độ 3");
}