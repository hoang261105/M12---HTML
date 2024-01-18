function isSole(n) {
   let arr = [];
   let sum = 0;

   for (let i = 1; i <= n; i += 2) {
      arr.push(i);
      sum += i;
    }

  if (sum % 2 === 0) {
    arr.pop(); 
  }
  return arr;
}

let n = +prompt("Nhập số n");
let arr = isSole(n);
console.log(arr);