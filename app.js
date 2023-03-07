const container = document.querySelector(".container");
const canvasBtn = document.querySelector(".edit-canvas");

let canvasWidth = 800;
container.style.width = `${canvasWidth}px`;

let cols = 6;
let rows = cols;

canvasBtn.addEventListener("click", editCanvas);

function editCanvas() {
  cols = +prompt("Edit the number of rows/columns");
  rows = cols;
  if (cols > 100) {
    unmountCanvas();
    container.textContent = "Row/Columns are limited to 100.";
  } else {
    unmountCanvas();
    mountCanvas();
  }
}

function mountCanvas() {
  let rowHeight = canvasWidth / cols;
  for (let i = 0; i < cols; i++) {
    const col = document.createElement("div");
    col.className = "col";

    for (let j = 0; j < rows; j++) {
      const row = document.createElement("div");
      row.className = "row";
      row.style.border = "1px solid #f2f2f2";
      row.style.height = `${rowHeight}px`;
      col.appendChild(row);
    }
    container.appendChild(col);
  }

  etch();
}

function unmountCanvas() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgb() {
  let r = randomInt(255);
  let g = randomInt(255);
  let b = randomInt(255);

  return `rgb(${r}, ${g}, ${b})`;
}

function etch() {
  const tiles = document.querySelectorAll(".row");

  tiles.forEach((tile) => {
    tile.addEventListener("mouseover", () => {
      tile.style.backgroundColor = randomRgb();
    });
  });
}

mountCanvas();
