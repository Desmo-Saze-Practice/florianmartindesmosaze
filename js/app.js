// Create table element
const tableElement = document.createElement('table');

//insert table element
const invaderElement = document.getElementById('invader');
invaderElement.appendChild(tableElement);

// ton code ici
const canvaHeight = 8;
const canvaWidth = 8;

// select all table rows

for (i = 0; i < canvaWidth; i++) {
    // debugger;
    const rowElement = document.createElement('tr');
    rowElement.className = 'rowElement';
    tableElement.appendChild(rowElement);

    for (j = 0; j < canvaHeight; j++) {
        const cellElement = document.createElement('td');
        cellElement.className = 'cellElement';
        rowElement.appendChild(cellElement);
    }

}