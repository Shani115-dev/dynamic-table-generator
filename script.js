// script.js
document.getElementById("generateTable").addEventListener("click", generateTable);

function generateTable() {
  const rows = parseInt(document.getElementById("rows").value);
  const columns = parseInt(document.getElementById("columns").value);
  const tableContainer = document.getElementById("tableContainer");

  // Clear previous table
  tableContainer.innerHTML = "";

  // Create table
  const table = document.createElement("table");

  // Generate rows and columns
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `R${i + 1}C${j + 1}`;
      td.appendChild(input);
      tr.appendChild(td);
    }
    // Add delete row button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Row";
    deleteBtn.className = "deleteRow";
    deleteBtn.onclick = () => table.deleteRow(tr.rowIndex);
    const td = document.createElement("td");
    td.appendChild(deleteBtn);
    tr.appendChild(td);

    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
}
