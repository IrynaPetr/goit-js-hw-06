function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
changeColorBtn: document.querySelector('button.change-color'),
body: document.body,
colorValue: document.querySelector('span.color'),
}
refs.changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
})