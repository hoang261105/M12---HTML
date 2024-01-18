function printPrime(arr) {
    let newArr = [];

    for(let i=0; i<=arr.length; i++){
        let num = arr[i];
        let isPrime = true;
        if(num < 2){
            isPrime = false; 
        }else{
            for(let i=2; i<=Math.sqrt(num); i++){
                if(num%i===0){
                    isPrime = false;
                    break;
                }
            }
        }
        if(isPrime){
            if(num !== undefined){
                newArr.push(num);
            }  
        }
    }
    return newArr;
}
let arr = [1, 3, 6, 12, 53, 79, 14, 88, 100];
let print = printPrime(arr);
console.log(print);

