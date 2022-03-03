window.addEventListener('load', () => {

  const form = document.querySelector('#form');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const ulErrors = document.querySelector('.errors');
  const inputs = document.querySelectorAll('input');
  const labelEmail = document.querySelector('.labelEmail');
  const inputEmail = document.querySelector('.input-email');
  const labelPassword = document.querySelector('.labelPassword');
  const inputPassword = document.querySelector('input.input-password');

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case 'email':
        if (email.value.length <= 3) {
          labelEmail.innerText = "Debes ingresar un email";
          labelEmail.classList.add('text-danger');
          inputEmail.classList.remove('border', 'border-success');
        } else {
          labelEmail.innerText = "";
          labelEmail.classList.remove('text-danger');
          inputEmail.classList.add('border', 'border-success');
        }
        break;
      case 'password':
        if (password.value.length <= 1) {
          labelPassword.innerText = "Debes escribir una contraseña";
          labelPassword.classList.add('text-danger');
          inputPassword.classList.remove('border', 'border-success');
        } else {
          labelPassword.innerText = "";
          labelPassword.classlist.remove('text-danger');
          // no funciona el border success, no se porque
          inputPassword.classList.add('border', 'border-success');
        }
        break;
    }
  }
  
  inputs.forEach(input => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });
  
  
  form.addEventListener('submit', (e) => {
    let errors = [];
    if (email.value == '') {
      errors.push('El campo Email no puede quedar vacio');
    }
    if (password.value == '') {
      errors.push('El campo Password no puede quedar vacio');
    }
  
    console.log(errors.length);
    console.log(errors);
  
    if (errors.length > 0) {
      e.preventDefault();
      errors.forEach(error => {
        ulErrors.classList.add('alert-warning');
        ulErrors.innerHTML += `<li>${error}<li>`;
        // hacer que no se sumen devuelta los errores al ul
        // y desaparezca el que esta valdidado
      })
    } else {
      alert('El usuario paso las validaciones del front')
    }
  
  })
})



