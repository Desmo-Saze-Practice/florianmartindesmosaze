// grid value
const canvaSize = 8;

//insert table element
const invaderElement = document.getElementById('invader');

// Creates grid
for (i = 0; i < canvaSize; i++) {
    // debugger;
    const rowElement = document.createElement('div');
    rowElement.className = 'rowElement';

    for (j = 0; j < canvaSize; j++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cellElement';
        rowElement.appendChild(cellElement);
        cellElement.addEventListener('mouseup', function () {
            // cellElement.style.backgroundColor = curentColor === 'black' ? 'black' : "white";
            if (cellElement.style.backgroundColor === "black") {
                cellElement.style.backgroundColor = "white";
            }
            else {
                cellElement.style.backgroundColor = "black";
            }
        })
    }
    invaderElement.appendChild(rowElement);
};
// debugger;
// select form element
const configElement = document.querySelector('.configuration');

// create input type number and ad it to the form
const numberElement = document.createElement('input');
numberElement.setAttribute('type', 'number');
numberElement.setAttribute('value', '16');
numberElement.setAttribute('min', '4');
configElement.appendChild(numberElement);

const validationElement = document.createElement('input');
validationElement.setAttribute('type', 'button');
validationElement.setAttribute('value', 'Apply');
configElement.appendChild(validationElement);