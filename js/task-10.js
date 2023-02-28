function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls>input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 30;
  let elementsToAdd = [];

  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();
    elementsToAdd.push(
      `<div id="boxes-element" style="width:${size}px; height:${size}px; background-color:${color};"></div>`,
    );
    size += 10;
  }
  return elementsToAdd.join('');
}

btnCreateEl.addEventListener('click', onCreateBoxesClick);
btnDestroyEl.addEventListener('click', onDestroyBoxesClick);

function onCreateBoxesClick() {
  boxesEl.insertAdjacentHTML('afterbegin', createBoxes(inputEl.value));
  inputEl.value = '';
}

function onDestroyBoxesClick() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}