let year = prompt("Nhập 1 năm bất kỳ");

if(year%4===0 && year%100!==0){
    console.log("Năm " +year + " là năm nhuận");
}else{
    console.log("Năm " +year + " không là năm nhuận");
}