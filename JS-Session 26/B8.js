const arr = [9, 3, 3, 5, 7, 5, 9, 11, 15, 15, 15];

var num = {};

for (let i=0; i<arr.length; i++){
    var element = arr[i];
    if(num[element]){
        num[element]++;
    }else{
        num[element] = 1;
    }
    
}
for(var key in num){
    if(num.hasOwnProperty(key) && num[key] >= 2){
        console.log(key);
    }
}
