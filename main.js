function addColumn() {
    let table = document.getElementById("dynamicTable");
    let header = document.getElementById("tableHead");
    let newTh = document.createElement("th");
    newTh.innerHTML = `Column ${header.children.length + 1}`;
    newTh.setAttribute('ondblclick', 'renameHeader(this)');
    header.appendChild(newTh);

    let rows = table.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        let newCell = rows[i].insertCell(-1);
        newCell.innerHTML = `Row ${i} Col ${header.children.length}`;
        newCell.setAttribute('contenteditable', 'true');
    }
}

function addRow() {
    let table = document.getElementById("dynamicTable");
    let newRow = table.insertRow(-1);
    let header = document.getElementById("tableHead");
    for (let i = 0; i < header.children.length; i++) {
        let newCell = newRow.insertCell(-1);
        newCell.innerHTML = `Row ${table.rows.length - 1} Col ${i + 1}`;
        newCell.setAttribute('contenteditable', 'true');
    }
}

function deleteColumn() {
    let header = document.getElementById("tableHead");
    if (header.children.length > 0) {
        header.deleteCell(-1);
        let rows = document.getElementById("dynamicTable").getElementsByTagName("tr");
        for (let i = 1; i < rows.length; i++) {
            if (rows[i].children.length > 0) {
                rows[i].deleteCell(-1);
            }
        }
    }
}

function deleteRow() {
    let table = document.getElementById("dynamicTable");
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function renameHeader(headerCell) {
    let newName = prompt("Enter new column name:", headerCell.innerHTML);
    if (newName !== null) {
        headerCell.innerHTML = newName;
    }
}



// function sortTableByColumn(tableId, columnIndex, isNumeric) {
//     let table = document.getElementById(tableId);
//     let rows = Array.from(table.rows).slice(1); // Get all rows except the header

//     // Sorting function
//     rows.sort((rowA, rowB) => {
//         let cellA = rowA.cells[columnIndex].innerText;
//         let cellB = rowB.cells[columnIndex].innerText;

//         if (isNumeric) {
//             return parseFloat(cellA) - parseFloat(cellB); // For numeric columns
//         } else {
//             return cellA.localeCompare(cellB); // For text columns
//         }
//     });

//     // Reappend sorted rows to the table
//     rows.forEach(row => table.appendChild(row));
// }


// function filterTableByColumn(tableId, columnIndex, filterValue) {
//     let table = document.getElementById(tableId);
//     let rows = Array.from(table.rows).slice(1); // Get all rows except the header

//     rows.forEach(row => {
//         let cellText = row.cells[columnIndex].innerText.toLowerCase();
//         if (cellText.includes(filterValue.toLowerCase())) {
//             row.style.display = ''; // Show row if it matches the filter
//         } else {
//             row.style.display = 'none'; // Hide row if it doesn't match
//         }
//     });
// }
