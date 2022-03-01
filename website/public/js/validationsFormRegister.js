
const name = document.querySelector('#name');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const rpassword = document.querySelector('#rpassword');
const avatar = document.querySelector('#avatar');

const ulErrors = document.querySelector('.errors')
const inputs = document.querySelectorAll('inputs');
const labelName = document.querySelector('labelName');
const labeluserName = document.querySelector('labelUsername');
const labelEmail = document.querySelector('labelEmail');
const labelPassword = document.querySelector('labelPassword');
const labelRpassword = document.querySelector('labelRpassword');
const labelAvatar = document.querySelector('labelAvatar');

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'name':
      if (name.value.lenght <= 1) {
        labelName.innerText = "El nombre debe tener mas de 2 caracteres";
        labelName.classList.add('is-invalid');
        labelName.classList.remove('is-valid');
      } else {
        labelName.innerText = "Nombre";
        labelName.classList.add('is-valid');
        labelName.classList.remove('is-invalid');
      }
      break;
    case 'userName':
      if (userName.value.lenght <= 1 || userName.value.lenght > 20) {
        labeluserName.innerText = "El username debe tener entre 2 y 20 caracteres";
        labeluserName.classList.add('is-invalid');
        labeluserName.classList.remove('is-valid');
      } else {
        labeluserName.innerText = "Username";
        labeluserName.classList.add('is-valid');
        labeluserName.classlist.remove('is-invalid');
      }
      break
    case 'email':
      if (email.value.lenght <= 1 || email.value.lenght > 20) {
        labelEmail.innerText = "El mail debe ser valido";
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
        labelPassword.innerText = "La contraseña debe tener entre 8 y 20 caracteres";
        labelPassword.classList.add('is-invalid');
        labelPassword.classList.remove('is-valid');
      } else {
        labelPassword.innerText = "Contraseña";
        labelPassword.classList.add('is-valid');
        labelPassword.classlist.remove('is-invalid');
      }
      break
    case 'rpassword':
      if (rpassword.value.lenght <= 7 || rpassword.value.lenght > 20) {
        labelRpassword.innerText = "La contraseña debe tener entre 8 y 20 caracteres";
        labelRpassword.classList.add('is-invalid');
        labelRpassword.classList.remove('is-valid');
      } else {
        labelRpassword.innerText = "Contraseña";
        labelRpassword.classList.add('is-valid');
        labelRpassword.classlist.remove('is-invalid');
      }
      break
    case 'avatar':
      if (avatar.value.lenght <= 7 || avatar.value.lenght > 20) {
        labelAvatar.innerText = "La contraseña debe tener entre 8 y 20 caracteres";
        labelAvatar.classList.add('is-invalid');
        labelAvatar.classList.remove('is-valid');
      } else {
        labelAvatar.innerText = "Contraseña";
        labelAvatar.classList.add('is-valid');
        labelAvatar.classlist.remove('is-invalid');
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
  if (name.value == '') {
    erorrs.push('El campo Nombre no puede quedar vacio');
  }
  if (userName.value == '') {
    erorrs.push('El campo Username no puede quedar vacio');
  }
  if (email.value == '') {
    erorrs.push('El campo Email no puede quedar vacio');
  }
  if (password.value == '') {
    erorrs.push('El campo Password no puede quedar vacio');
  }
  if (rpassword.value == '') {
    erorrs.push('El campo Repeat Password no puede quedar vacio');
  }
  if (errors.lenght > 0) {
    e.preventDeFault();
    errors.forEach(error => {
      ulErrors.classlist.add('alert-warning');
      ulErrors.innerHTML += `<li>${error}<li>`;
      console.log(error)
    })
  } else {
    alert('El usuario se creo correctamente')
  }

})
