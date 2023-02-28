const counterValue = document.querySelector("#value");
const calc = document.querySelectorAll("#counter button");

counterValue.textContent = 0;

calc[0].addEventListener("click", () => (counterValue.textContent -= 1));

calc[1].addEventListener(
  "click",
  () => (counterValue.textContent = Number(counterValue.textContent) + 1)
);
