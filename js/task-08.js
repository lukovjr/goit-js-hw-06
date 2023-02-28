const formLoginEl = document.querySelector('.login-form');

formLoginEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === '' || password.value === '') {
    return alert(
      'Всі поля повинні бути заповнені!',
    );
  }

  const objFormData = {
    email: email.value,
    password: password.value,
  };
  console.log(objFormData);
  event.currentTarget.reset();
}
