let random = Math.floor(Math.random()*10) + 1;
let loop = true;
do{
    let num = prompt("Nhập 1 số");
    if(num > random){
        console.log("Lớn hơn")
    }else if(num<random){
        console.log("Nhỏ hơn");
    }else{
        console.log("BINGO");
        break;
    }
}while(loop == true);
