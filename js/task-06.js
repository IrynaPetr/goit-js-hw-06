

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) =>{
  
  const dataLength = inputEl.getAttribute('data-length')
  if(event.currentTarget.value.trim().length === parseInt(dataLength)) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
    
  }
  else {event.currentTarget.classList.add('invalid');
  event.currentTarget.classList.remove('valid');}

})