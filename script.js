'use strict';

const gridContainer = document.getElementsByClassName('grid-container');
const gridSize = document.getElementById('grid-size-button');
const clearButton = document.getElementById('clear-button');
const randomColorButton = document.getElementById('random-color-button');
const eraserButton = document.getElementById('eraser-button');
const blackColorButton = document.getElementById('black-color-button');

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    gridContainer[0].appendChild(row);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.style.width = `${500 / size}px`;
      cell.style.height = `${500 / size}px`;
      cell.style.backgroundColor = 'white';
      row.appendChild(cell);
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
      });
    }
  }
}
createGrid(16);

gridSize.addEventListener('click', () => {
  const newSize = prompt('Enter new grid size: ');
  if (newSize > 100 || newSize < 1) {
    alert('Please enter a number between 1 and 100');
  } else {
    while (gridContainer[0].firstChild) {
      gridContainer[0].removeChild(gridContainer[0].firstChild);
    }
    createGrid(newSize);
  }
});

clearButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
});

randomColorButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    });
  });
});

eraserButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'white';
    });
  });
});

blackColorButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
    });
  });
});
