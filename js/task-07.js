const refs = {
  rangeFontSizeEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
}

refs.rangeFontSizeEl.addEventListener('input', e => {
  refs.textEl.style.fontSize = `${e.target.value}px`
})

