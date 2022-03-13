window.addEventListener('load', () => {

  const form = document.querySelector('#form');
  const email = document.querySelector('#email');
  const labelEmail = document.querySelector('.labelEmail');
  const inputEmail = document.querySelector('.input-email');
  const password = document.querySelector('#password');
  const labelPassword = document.querySelector('.labelPassword');
  const inputPassword = document.querySelector('input.input-password');
  const ulErrors = document.querySelector('.errors');
  const inputs = document.querySelectorAll('input');

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case 'email':
        const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/;
          if(!reg.test(email.value.trim())){
          labelEmail.innerText = "El mail debe ser valido";
          labelEmail.classList.add('text-danger');
          inputEmail.classList.remove('border', 'border-success');
        } else {
          labelEmail.innerText = "";
          labelEmail.classList.remove('text-danger');
          inputEmail.classList.add('border', 'border-success');
        }
        break;
      case 'password':
        if (password.value.trim().length <= 1) {
          labelPassword.innerText = "Debes escribir una contraseña";
          labelPassword.classList.add('text-danger');
          inputPassword.classList.remove('border', 'border-success');
        } else {
          labelPassword.innerText = "";
          labelPassword.classList.remove('text-danger');
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
    ulErrors.innerHTML = '';
    let errors = [];
    if (email.value.trim() == '') {
      errors.push('El campo Email no puede quedar vacio');
    }
    if (password.value.trim() == '') {
      errors.push('El campo Password no puede quedar vacio');
    }

    
    if (errors.length > 0) {
      e.preventDefault();
      errors.forEach(error => {
        ulErrors.classList.add('alert-warning');
        ulErrors.innerHTML += `<li>${error}<li>`;
      })
    } else {
      Swal.fire(
        'El usuario paso las validaciones del front!',
        'success'
      );
    }
  
  })
})



