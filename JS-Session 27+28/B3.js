let arr = [1, 5, 8, 7, 12, 14, 56, 33];

let newArr = arr.filter(function(element){
    return element % 2 == 0;
});
console.log(newArr);
