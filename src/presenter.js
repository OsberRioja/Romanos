import romanizar from "./romanos.js";


const first = document.querySelector("#numero");
const form = document.querySelector("#romanos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = Number.parseInt(first.value);
  let rom=romanizar(num);
  console.log(rom);

  div.innerHTML = "<p>" + rom + "</p>";
});