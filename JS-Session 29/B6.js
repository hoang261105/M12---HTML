function capalizeWords(str) {
    let words = str.split(" ");
    for(let i=0; i<words.length; i++){
        words[i] = words[i].charAt(0).toUppercase() + words[i].slice(1); 
    }
    return words.join(" ");
}

let str = prompt("Nhập vào 1 chuỗi");

let words = capalizeWords(str);
console.log(words);