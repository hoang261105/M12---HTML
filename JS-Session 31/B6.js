// function fakeFind(arr, fn) {
//     for(let i=0; i<arr.length; i++){
//         let test = fn(arr[i]); // TRUE || FALSE
//         if(test === true){
//             return arr[i];
//         }
//     }
// }

// let arr = [3, 5, 4, 1, 10];

// // let findElement = arr.find(function(e, i){
// //     return e === 100;
// // });

// let rest1 = fakeFind(arr, function(e){
//     return e === 4; // true or false
// });
// console.log(rest1);

// let rest2 = fakeFind(arr, function(e){
//     return e === 100; // true or false
// });
// console.log(rest2);
function fakeFind(arr, fn){
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}

let arr = [1, 2, 3, 4]
let result1 = fakeFind(arr, function(e){
    if(e%2===0){
        return true;
    }else{
        return false;
    }
});
console.log(result1);

let result2 = fakeFind(arr, function(e){
    if(e%2!==0){
        return true;
    }else{
        return false;
    }
});
console.log(result2);