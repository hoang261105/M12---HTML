let a = prompt("Nhập a");
let b = prompt("Nhập b");
let c = prompt("Nhập c");

if (isNaN(a)) {
  console.log(`${a} không phải là số`);
} else if (isNaN(b)) {
  console.log(`${b} không phải là số`);
} else if (isNaN(c)) {
  console.log(`${c} không phải là số`);
} else {
  if (a == 0) {
    if (b == 0) {
      console.log("Phương trình vô nghiệm");
    } else {
      let x = -c / b;
      console.log("Phương trình có nghiệm là x = " + x);
    }
  } else {
    let delta = b ** 2 - 4 * a * c;
    if (delta > 0) {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log("Phương trình có 2 nghiệm là: x = " + x1 + " " + "x = " + x2);
    } else if (delta === 0) {
      let x3 = -b / (2 * a);
      console.log("Phương trình có nghiệm kép là: x = " + x3);
    } else {
      console.log("Phương trình vô nghiệm");
    }
  }
}
