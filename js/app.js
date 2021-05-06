const grid = {
    gridSize: 8,
    resetGrid: function () {
        document.getElementById('invader').innerHTML = '';
    },
    generateInput: function () {
        // select form element
        const configElement = document.querySelector('.configuration');

        // create input type number and ad it to the form
        const numberElement = document.createElement('input');
        numberElement.setAttribute('class', 'numberInput');
        numberElement.setAttribute('type', 'number');
        // numberElement.setAttribute('value', grid.gridSize);
        numberElement.setAttribute('min', '4');
        configElement.appendChild(numberElement);


        const validationElement = document.createElement('button');
        validationElement.setAttribute('class', 'validationButton');
        validationElement.setAttribute('value', 'Apply');
        validationElement.innerHTML = 'Apply';
        configElement.appendChild(validationElement);
        validationElement.addEventListener('click', grid.generateGrid);

        configElement.addEventListener('submit', function (event) {

            // // prevent default behavior on form submition
            // console.log(event.target);
            event.preventDefault();
            grid.gridSize = parseInt(numberElement.value);
        });

    },
    generateGrid: function () {
        grid.resetGrid();
        //insert table element
        const invaderElement = document.getElementById('invader');

        // Creates grid
        for (i = 0; i < grid.gridSize; i++) {
            // debugger;
            const rowElement = document.createElement('div');
            rowElement.className = 'rowElement';

            for (j = 0; j < grid.gridSize; j++) {
                const cellElement = document.createElement('div');
                cellElement.className = 'cellElement';
                rowElement.appendChild(cellElement);
                cellElement.addEventListener('mouseup', grid.handleCellClic
                )
            }
            invaderElement.appendChild(rowElement);
        };
    },
    handleCellClic: function (event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains("cell--black")) {
            clickedElement.classList.remove("cell--black");
        }
        else {
            clickedElement.classList.add("cell--black");
        }
    }
}


let init = function () {

    grid.generateInput();
    grid.generateGrid();
}

init();