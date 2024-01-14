let n = +prompt("Nhập số:");

for(let i = 1; i<=n; i++){
    let row="";
    for(j = 1; j<=i; j++){
        row += "*";
    }
    console.log(row);
}

