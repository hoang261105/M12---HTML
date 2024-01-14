let a = prompt("Nhập a");
let b = prompt("Nhập b");

if(a==0){
    console.log("Phương trình vô nghiệm");
}else if(a==0 && b==0){
    console.log("Phương trình có vô số nghiệm");
}else{
    var x = -b/a;
    console.log("Phương trình có nghiệm là: " +x);
}

