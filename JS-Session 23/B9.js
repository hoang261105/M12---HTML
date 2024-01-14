let n = parseInt(prompt("Nhập giá trị n:"));

let fibonacci = [0, 1];

let i = 2;
while (true) {
  let nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
  if (nextFibonacci >= n) {
    break;
  }
  fibonacci.push(nextFibonacci);
  i++;
}

console.log(fibonacci.join(", "));