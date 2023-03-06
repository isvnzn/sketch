const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".size-btn");

let squareX = 0;
let totalSquare = 0;

sizeBtn.addEventListener("click", () => {
  squareX = prompt("Number of squares");
  totalSquare = squareX * squareX;
  console.log(totalSquare);
  // re render the squares
});

for (let i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.setAttribute(
    "style",
    "border: 1px solid black; width: 16px; height: 16px;"
  );

  square.className = "pixel";

  container.appendChild(square);
}

const pixels = document.querySelectorAll(".pixel");
// pixels.style.flex = "1";

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "red";
  });
});
