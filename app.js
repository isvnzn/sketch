const container = document.querySelector(".container");

// let i = container.childNodes.length;

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

pixels.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
    pixel.style.backgroundColor = "red";
  });
});
