const button = document.getElementById("myButton");
const table = document.getElementById("myTable");
let rowCount = table.rows.length;

button.addEventListener("click", function() {
    const newRow = table.insertRow(rowCount);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = "Cell 1 row 2";
    cell2.textContent = "Cell 2 row 2";
    cell3.textContent = "Cell 3 row 2";

    rowCount++;
});