/* START TASK 1: Your code goes here */
let table = new Table();

function Table() {
    const targetDiv = document.querySelector('#task1 table');
    targetDiv.addEventListener('pointerdown', pointerDownHandler, false);

    const colourPriority = ['green', 'blue', 'yellow'];
    let specialCellId = null;

    (function startProgram() {
        populateCells();
    })()

    function pointerDownHandler(event) {
        paintCells(event);
    }

    // function swapColours(event) {
    //     let currColour = event.target.getAttribute('currColour');
    //     let prevColour = event.target.getAttribute('prevColour');
    //     event.target.setAttribute('currColour', prevColour);
    //     event.target.setAttribute('prevColour', currColour);
    //     event.target.style.background = prevColour;
    // }

    function paintCells(event) {
        let rowNumber = event.target.id[0];
        let tdID = event.target.id;

        switch (tdID) {
            case specialCellId:
                loopThroughTable('green'); // paint green
                break;
            case '00':
            case '10':
            case '20':
                loopThroughRow('blue', rowNumber); // paint blue
                break;

            default:
                if (tdID !== specialCellId && tdID !== '00' &&
                    tdID !== '10' && tdID !== '00') {
                    event.target.setAttribute('prevColour', event.target.getAttribute('currColour'));
                    event.target.setAttribute('currColour', 'yellow');
                    event.target.setAttribute('swapColour', 'true');
                    event.target.style.background = 'yellow';
                }
                break;
        }
    }

    function loopThroughTable(newColour) {
        const newColourPrio = colourPriority.indexOf(newColour);
        const rowsList = document.getElementsByTagName('table')[0].rows;

        for (let i = 0; i < rowsList.length; ++i) {
            const row = rowsList[i];

            for (let j = 0; j < row.cells.length; ++j) {
                const cell = row.cells[j];
                const cellCurrentColour = cell.style.background ? cell.style.background : newColour;
                const cellCurrentColourPrio = colourPriority.indexOf(cellCurrentColour);

                if (cellCurrentColourPrio > newColourPrio) {
                    // don't repaint                     
                } else {
                    cell.setAttribute('prevColour', cell.getAttribute('currColour'));
                    cell.setAttribute('currColour', newColour);
                    cell.style.background = newColour;
                }
            }
        }
        document.getElementsByTagName('table')[0].style.backgroundColor = newColour;
    }

    function loopThroughRow(newColour, rowNumber) {
        const newColourPrio = colourPriority.indexOf(newColour);
        const rowsList = document.getElementsByTagName('table')[0].rows;
        const row = rowsList[rowNumber];

        for (let i = 0; i < row.cells.length; ++i) {
            const cell = row.cells[i];
            const cellCurrentColour = cell.style.background ? cell.style.background : newColour;
            const cellCurrentColourPrio = colourPriority.indexOf(cellCurrentColour);

            if (cellCurrentColourPrio > newColourPrio) {
                // don't repaint                     
            } else {
                cell.setAttribute('prevColour', cell.getAttribute('currColour'));
                cell.setAttribute('currColour', newColour);
                cell.style.background = newColour;
            }
        }
    }

    function populateCells() {
        let specialCellSet = false;
        let rowsList = document.getElementsByTagName('table')[0].rows;

        for (let i = 0; i < rowsList.length; ++i) {
            const row = rowsList[i];

            for (let j = 0; j < row.cells.length; ++j) {
                const cell = row.cells[j];
                cell.setAttribute('id', i + '' + j + '');
                cell.setAttribute('prevColour', 'white');
                cell.setAttribute('currColour', 'white');

                if (!specialCellSet && j !== 0) {
                    if (Math.round(Math.random())) {
                        cell.innerText = 'Special Cell';
                        specialCellSet = true;
                        specialCellId = cell.getAttribute('id')
                        continue;
                    }
                }
                // in case specialCell has not been set before loop exit                 
                if (!specialCellSet && i === +'2' && j === +'2') {
                    cell.innerText = 'Special Cell';
                    specialCellId = cell.getAttribute('id')
                    continue;
                }

                cell.innerText = 'Cell';
            }
        }
    }

}
/* END TASK 1 */

/* START TASK 2: Your code goes here */

/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
