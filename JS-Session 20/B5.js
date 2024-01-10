let vatly = +prompt('Nhập điểm môn Vật Lý');
let hoahoc = +prompt('Nhập điểm môn Hóa Học');
let sinhhoc= +prompt('Nhập điểm môn Sinh Học');

var sum = parseFloat(vatly+hoahoc+sinhhoc);
var avarage = parseFloat((vatly + hoahoc + sinhhoc)/3);

console.log("Tổng điểm 3 môn là: " +sum);
console.log("Điểm trung bình 3 môn là: " + avarage);