const container = document.querySelector(".container");
const canvasBtn = document.querySelector(".edit-canvas");

let canvasWidth = 300;
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
      row.setAttribute(
        "style",
        `border: 1px solid black; height: ${rowHeight}px;`
      );
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

function etch() {
  const tiles = document.querySelectorAll(".row");

  tiles.forEach((tile) => {
    tile.addEventListener("mouseover", () => {
      tile.style.backgroundColor = "red";
    });
  });
}

mountCanvas();
