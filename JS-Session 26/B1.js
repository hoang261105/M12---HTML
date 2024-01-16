let arr = ["a", 4, "b", -6, "d"];
let found = false;
console.log(arr);   
for(let item of arr){
    if(Number.isInteger(item)){
        console.log(item);
        found = true;
        break;
    }
}
if(!found){
    console.log("Không tìm thấy số nguyên");
}