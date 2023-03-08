const canvas = document.querySelector("#canvas");
const editCanvasBtn = document.querySelector("#edit-canvas");
const clearCanvasBtn = document.querySelector("#clear-canvas");
const size = document.querySelector(".canvas-size");

let canvasWidth = 600;
canvas.style.width = `${canvasWidth}px`;
canvas.style.display = "flex";

let cols = 6;
let rows = cols;
size.textContent = `${cols}x${cols} canvas`;

function editCanvas() {
  cols = +prompt("Edit the number of rows/columns");
  rows = cols;
  if (cols > 100) {
    unmountCanvas();
    canvas.textContent = "Rows/Columns are limited to 100.";
    size.textContent = `${cols}x${cols} canvas`;
  } else if (!cols) {
    canvas.textContent = "Please input a number from 1 to 100.";
    size.textContent = `${cols}x${cols} canvas`;
  } else {
    unmountCanvas();
    mountCanvas();
    size.textContent = `${cols}x${cols} canvas`;
  }
}

function clearCanvas() {
  const tiles = document.querySelectorAll(".row");

  tiles.forEach((tile) => {
    tile.style.backgroundColor = "transparent";
  });
}

editCanvasBtn.addEventListener("click", editCanvas);
clearCanvasBtn.addEventListener("click", clearCanvas);

function mountCanvas() {
  let rowHeight = canvasWidth / cols;
  for (let i = 0; i < cols; i++) {
    const col = document.createElement("div");
    col.className = "col";
    col.style.flex = 1;

    for (let j = 0; j < rows; j++) {
      const row = document.createElement("div");
      row.className = "row";
      row.style.border = "1px solid #f2f2f2";
      row.style.height = `${rowHeight}px`;
      col.appendChild(row);
    }
    canvas.appendChild(col);
  }

  etch();
}

function unmountCanvas() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
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
  const rgb = document.querySelector("#rgb");
  const colorTool = document.querySelector("#color-tool");

  tiles.forEach((tile) => {
    tile.addEventListener("mouseover", (event) => {
      if (event.buttons === 1 && rgb.checked) {
        tile.style.backgroundColor = randomRgb();
      } else if (event.buttons === 1) {
        tile.style.backgroundColor = colorTool.value;
      }
    });

    tile.addEventListener("click", () => {
      tile.style.backgroundColor = rgb.checked
        ? (tile.style.backgroundColor = randomRgb())
        : (tile.style.backgroundColor = colorTool.value);
    });

    tile.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });
}

mountCanvas();
