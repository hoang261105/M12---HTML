let a = +prompt('Nhập số a');
let b = +prompt('Nhập số b');
let c = +prompt('Nhập số c');
let d = +prompt('Nhập số d');

let numbers = [a,b,c,d];
let maxNumber = Math.max(...numbers);
let bcnn = maxNumber;

while (true) {
  let isBCNN = true;

  for (let i = 0; i < numbers.length; i++) {
    if (bcnn % numbers[i] !== 0) {
      isBCNN = false;
      break;
    }
  }

  if (isBCNN) {
    break;
  }

  bcnn += maxNumber;
}

console.log("BCNN của", a,b,c,d, "là", bcnn);
