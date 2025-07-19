let sortDirections = {
  0: 'asc', // Name
  5: 'asc'  // Salary
};

function renderStaffTable(data) {
  const tbody = document.querySelector("#staffTable tbody");
  tbody.innerHTML = "";

  data.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function sortStaffByColumn(colIndex) {
  dataSet.sort((a, b) => {
    let valA = a[colIndex];
    let valB = b[colIndex];

    if (colIndex === 5) {
      valA = parseFloat(valA.replace(/[$,]/g, ""));
      valB = parseFloat(valB.replace(/[$,]/g, ""));
    } else {
      valA = valA.toString().toLowerCase();
      valB = valB.toString().toLowerCase();
    }

    if (valA < valB) return sortDirections[colIndex] === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirections[colIndex] === 'asc' ? 1 : -1;
    return 0;
  });

  sortDirections[colIndex] = sortDirections[colIndex] === 'asc' ? 'desc' : 'asc';
  renderStaffTable(dataSet);
}

window.onload = function () {
  renderStaffTable(dataSet);
  document.getElementById("currentDate").textContent = new Date().getFullYear();
};
