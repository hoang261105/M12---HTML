let n = +prompt('Nhập số n');

let factors = [];

// Phân tích số thành các thừa số 2
while (n % 2 === 0) {
  factors.push(2);
  n = n / 2;
}

// Phân tích số thành các thừa số nguyên tố lẻ
let sqrtNumber = Math.sqrt(n);
let i = 3;
while (i <= sqrtNumber) {
  if (n % i === 0) {
    factors.push(i);
    n = n / i;
  } else {
    i = i + 2; // Chỉ xét các số lẻ làm thừa số nguyên tố
  }
}

// Nếu số còn lại khác 1, nó cũng là một thừa số nguyên tố
if (n > 2) {
  factors.push(n);
}

// Hiển thị kết quả với dấu "x"
let result = factors.join(" x ");
console.log("Phân tích thừa số nguyên tố của" +n + "là " +result);
