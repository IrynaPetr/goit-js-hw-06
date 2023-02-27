

const nameinputEl = document.querySelector('#name-input');
const nameOutputEl =document.querySelector('#name-output'); 

nameinputEl.addEventListener('input', (event) => {

  nameOutputEl.textContent = event.currentTarget.value.trim();  
  if(nameOutputEl.textContent.length === 0) {
nameOutputEl.textContent = 'Anonymous';
  }
})