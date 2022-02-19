const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let size = 16;
let penStyle = 'solid'
const COLOR = "#305658"

function clearGrid() {

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.backgroundColor = '#E3FDFD';
        square.style.opacity = null;
    });;

}


function createGrid() {

    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    });

    for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            for (let j = 0; j < size; j++) {
                const square = document.createElement('div');
                row.classList.add('row')
                square.classList.add('square')

                square.addEventListener('mouseover', () => {
                    if (penStyle === 'solid') {
                        square.style.backgroundColor = COLOR;
                        square.style.opacity = 1;
                    } else if (penStyle === 'rainbow') {
                        let randomColor = Math.floor(Math.random()*16777215).toString(16);
                        square.style.backgroundColor = '#' + randomColor;
                    } else if (penStyle === 'translucent') {
                        square.style.backgroundColor = COLOR;
                        if (parseFloat(square.style.opacity) > 0) {
                            square.style.opacity = parseFloat(square.style.opacity) + 0.25;
                        } else {
                            square.style.opacity = .25;
                        }
                    }
                });

                row.appendChild(square);
                container.appendChild(row);
            }
        }
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clearGrid);

const penRadios = document.querySelectorAll('input[name=pen-style]');
penRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
        penStyle = radio.value;
    });
}); 

const sizeForm = document.querySelector('#size');
sizeForm.addEventListener('keyup', () => {
    if (parseInt(sizeForm.value) >= 1 && parseInt(sizeForm.value) <= 100) {
        size = parseInt(sizeForm.value);
        createGrid();
    }
});

createGrid();