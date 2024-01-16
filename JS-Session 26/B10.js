function findIntesect(arr1, arr2, arr3) {
    const intersect = [];
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
            intersect.push(arr1[i]);
        }
    }
    return intersect;
}

const arr1 = [3, 4, 5, 6, 7, 8];
const arr2 = [3, 6, 9, 10, 12, 7];
const arr3 = [5, 7, 9, 3, 13, 14];

const intersect = findIntesect(arr1, arr2, arr3);
console.log(intersect);