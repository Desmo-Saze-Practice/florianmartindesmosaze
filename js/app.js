const grid = {
    // Settings part
    gridSize: 8,
    pixelSize: 10,
    colorValue: '#000',
    footerElement: document.querySelector('.bottom-page'),
    configElement: document.querySelector('.configuration'),
    invaderElement: document.getElementById('invader'),
    numberElement: document.createElement('input'),
    validationElement: document.createElement('button'),
    pixelInputElement: document.createElement('input'),
    colorPickElement: document.createElement('input'),
    bluevioletElement: document.querySelector('.blueviolet'),
    blackElement: document.querySelector('.black'),

    // functions part
    resetGrid: function () {
        document.getElementById('invader').innerHTML = '';
    },

    generateInput: function () {
        // input type number for grid size
        grid.numberElement.setAttribute('class', 'numberInput');
        grid.numberElement.setAttribute('type', 'number');
        grid.numberElement.setAttribute('min', '4');
        grid.numberElement.setAttribute('max', '200');
        grid.numberElement.setAttribute('value', '16');
        grid.configElement.appendChild(grid.numberElement);

        // input type color for pixels
        // grid.colorPickElement.setAttribute('class', 'colorInput');
        // grid.colorPickElement.setAttribute('type', 'color');
        // grid.colorPickElement.setAttribute('value', '#000');
        // grid.footerElement.appendChild(grid.colorPickElement);

        // input type number for pixels
        grid.pixelInputElement.setAttribute('class', 'pixelInput');
        grid.pixelInputElement.setAttribute('type', 'number');
        grid.pixelInputElement.setAttribute('min', '1');
        grid.pixelInputElement.setAttribute('max', '100');
        grid.pixelInputElement.setAttribute('value', '10');
        grid.configElement.appendChild(grid.pixelInputElement);

        // grid.pickerElement.style.backgroundColor = 'red';

        // submit button
        grid.validationElement.setAttribute('class', 'validationButton');
        grid.validationElement.setAttribute('value', 'Apply');
        grid.validationElement.setAttribute('type', 'submit');
        grid.validationElement.innerHTML = 'Apply';
        grid.configElement.appendChild(grid.validationElement);

        // trigger handleSubmit function on submitting form
        grid.configElement.addEventListener('submit', this.handleSubmit);
    },

    handleSubmit: function (event) {
        event.preventDefault();
        grid.gridSize = parseInt(grid.numberElement.value);
        let getPixelSize = parseInt(grid.pixelInputElement.value);
        grid.pixelSize = getPixelSize += 'px';
        grid.generateGrid();
    },

    generateGrid: function () {
        grid.resetGrid();
        // Creates grid
        console.log(grid.redElement, 'im here');
        grid.bluevioletElement.addEventListener('click', grid.handlePickerClick);
        grid.blackElement.addEventListener('click', grid.handlePickerClick);

        for (i = 0; i < grid.gridSize; i++) {
            const rowElement = document.createElement('div');
            rowElement.className = 'rowElement';

            for (j = 0; j < grid.gridSize; j++) {
                const cellElement = document.createElement('div');
                cellElement.className = 'cellElement';
                cellElement.style.height = grid.pixelSize;
                cellElement.style.width = grid.pixelSize;
                rowElement.appendChild(cellElement);
                cellElement.addEventListener('click', grid.handleCellClic)
            };
            grid.invaderElement.appendChild(rowElement);
        };
        console.log(grid.redElement);

    },

    handlePickerClick: function (event) {
        const clickedPicker = event.target;
        console.log('there is your clicked picker', clickedPicker);
        const pickerClass = clickedPicker.className;
        console.log('your returned picker class is', pickerClass);
        grid.splitedClass = pickerClass.split(' ');
        console.log('splited class here ', grid.splitedClass);

        return grid.splitedClass;
    },

    handleCellClic: function (event) {
        const clickedElement = event.target;
        clickedElement.classList.toggle(grid.splitedClass[1]);
        console.log('test returned picker', grid.splitedClass[1]);
    },

    // applyColor: function (event) {
    //     something
    // },

    init: function () {
        grid.generateInput();
        grid.generateGrid();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    grid.init();
});
