function color(num) {
 return parseInt(Math.random() * num);
}

function rgb() {
let r = color(255);
let g = color(255);
let b = color(255);
  return `rgb(${r},${g},${b})`;
}
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let runFunc = rgb();
  document.documentElement.style.setProperty("--bg", runFunc);
});
