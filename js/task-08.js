const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === '' || password.value === '') {
       alert('Все поля должны быть заполнены')
    }
    const formData = {
        email: email.value,
        password: password.value
   }
    console.log(formData);
    event.currentTarget.reset();
}