let month = +prompt('Nhập tháng');
let year = +prompt('Nhập năm');

if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
    console.log("Tháng " +month + " năm " +year + " có 31 ngày.");
}else if(month === 4 || month === 6 || month === 9 || month === 11){
    console.log("Tháng " +month + " năm " +year + " có 30 ngày.");
}else if(month === 2){
    if(year%4 === 0 && year%100 !== 0){
        console.log("Tháng " +month + " năm " +year + " có 29 ngày.");
    }else{
        console.log("Tháng " +month + " năm " +year + " có 28 ngày.");
    }
}else{
    if(year<0 && month<0){
        console.log("Tháng và năm không hợp lệ");
    }else{
        console.log("Không có tháng " +month + " năm " +year);
    }
}
