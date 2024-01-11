let math = +prompt("Nhập điểm toán");
let literature = +prompt("NHập điểm Văn");
let english = +prompt("Nhập điểm Anh");

let average = parseFloat((math+literature+english)/3);

if(average>=8 && average<=10){
    console.log("Giỏi");
}else if(average>=6.5 && average<8){
    console.log("Khá");
}else if(average>=5 && average<6.5){
    console.log("Trung bình");
}else{
    console.log("Yếu");
}