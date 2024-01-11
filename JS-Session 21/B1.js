let year = +prompt('Bạn sinh năm bao nhiêu?');
let indexYear = '2024';

let diff = indexYear - year;

if(year < 0 || year > 2024){
    console.log("Giá trị không hợp lệ");
} else{
    console.log("Tuổi của bạn là: " +diff);
}