const FormEl = document.querySelector('.login-form');
FormEl.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault()
  const {
    elements: {email, password},
  } = e.currentTarget;
   if (email.value ==='' || password.value ==='') {
    return alert('Please fill in all the fields!')
   }
   const userDetails = {email: email.value, Password: password.value}
   console.log(userDetails);
   e.currentTarget.reset()
}
