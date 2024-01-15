let n = prompt('Nhập một số nguyên dương n');
let reversedNumber = "";

if (n <= 0) {
  console.log("Vui lòng nhập lại số nguyên dương n");
} else {
  for (let i = n.length - 1; i >= 0; i--) {
    reversedNumber += n[i];
  }
  console.log("Số đảo ngược của", n, "là", reversedNumber);
}
