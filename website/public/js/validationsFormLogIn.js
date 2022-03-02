const email = document.querySelector('#email');
const password = document.querySelector('#password');

const ulErrors = document.querySelector('.errors');
const inputs = document.querySelector('.inputs');
const labelEmail = document.querySelector('.labelEmail');
const labelPassword = document.querySelector('.labelPassword');

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'email':
      if (email.value.lenght <= 1 || email.value.lenght > 20) {
        labelEmail.innerText = "El mail debe ya estar en la base";
        labelEmail.classList.add('is-invalid');
        labelEmail.classList.remove('is-valid');
      } else {
        labelEmail.innerText = "Email";
        labelEmail.classList.add('is-valid');
        labelEmail.classlist.remove('is-invalid');
      }
      break
    case 'password':
      if (password.value.lenght <= 7 || password.value.lenght > 20) {
        labelPassword.innerText = "La contraseña debe ya existir";
        labelPassword.classList.add('is-invalid');
        labelPassword.classList.remove('is-valid');
      } else {
        labelPassword.innerText = "Contraseña";
        labelPassword.classList.add('is-valid');
        labelPassword.classlist.remove('is-invalid');
      }
      break
  }
}
inputs.forEach(input => {
  input.addEventLinstener('keyup', validarFormulario);
  input.addEventLinstener('blur', validarFormulario);
});
formulario.addEventLinstener('submit', (e) => {
  let erorrs = [];
  if (email.value == '') {
    erorrs.push('El campo Email no puede quedar vacio');
  }
  if (password.value == '') {
    erorrs.push('El campo Password no puede quedar vacio');
  }
  if (errors.lenght > 0) {
    e.preventDeFault();
    errors.forEach(error => {
      ulErrors.classlist.add('alert-warning');
      ulErrors.innerHTML += `<li>${error}<li>`;
      console.log(error)
    })
  } else {
    alert('El usuario se logueo correctamente')
  }

})
