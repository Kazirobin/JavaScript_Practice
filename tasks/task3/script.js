const container = document.querySelector(".container");
const boxs = container.querySelectorAll(".box");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const submitBtn = document.getElementById("submitBtn");
const doneBtn = document.getElementById("doneBtn");
const buttons = document.querySelectorAll(".buttons button");
const result = document.querySelector('.result');

submitBtn.addEventListener("click", () => {
  box1.classList.add("d-none");
  box2.classList.remove("d-none");
});
doneBtn.addEventListener("click", () => {
  box1.classList.remove("d-none");
  box2.classList.add("d-none");
});

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    console.log(i);
    result.innerHTML = `You selected ${i+1} out of 5`
  });
});
