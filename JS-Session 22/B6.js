let num = prompt("Nhap 1 số có 4 chữ số");

let thousand = Math.floor(num/1000);
let hundred = Math.floor((num/100)%10);
let dozen = Math.floor((num/10)%10);
let unit = Math.floor(num%10);

console.log("Chữ số hàng nghìn: " +thousand);
console.log("Chữ số hàng trăm: " +hundred);
console.log("Chữ số hàng chục: " +dozen);
console.log("Chữ số hàng đơn vị: " +unit);