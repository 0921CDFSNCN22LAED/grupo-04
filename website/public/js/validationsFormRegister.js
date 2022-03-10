window.addEventListener('load', () => {
  
  const form = document.querySelector('#form');
  const name = document.querySelector('#name');
  const inputName = document.querySelector('.input-name');
  const labelName = document.querySelector('.labelName');
  const userName = document.querySelector('#userName');
  const labeluserName = document.querySelector('.labelUsername');
  const inputUserName = document.querySelector('.input-userName');
  const email = document.querySelector('#email');
  const labelEmail = document.querySelector('.labelEmail');
  const inputEmail = document.querySelector('.input-email');
  const password = document.querySelector('#password');
  const labelPassword = document.querySelector('.labelPassword');
  const inputPassword = document.querySelector('.input-password');
  const rpassword = document.querySelector('#rpassword');
  const labelRpassword = document.querySelector('.labelRpassword');
  const inputRpassword = document.querySelector('.input-rPassword');
  const avatar = document.querySelector('#avatar');
  const labelAvatar = document.querySelector('.labelAvatar');
  const inputAvatar = document.querySelector('.input-avatar');  
  const ulErrors = document.querySelector('.errors')
  const inputs = document.querySelectorAll('input');
  
  const validarFormulario = (e) => {
    switch (e.target.name) {
      case 'name':
        if (name.value.length <3) {
          labelName.innerText = "El nombre debe tener mas de 2 caracteres";
          labelName.classList.add('text-danger');
          inputName.classList.remove('border', 'border-success');
        } else {
          labelName.innerText = "";
          labelName.classList.remove('text-danger');
          inputName.classList.add('border', 'border-success');
        }
        break;
      case 'userName':
        if (userName.value.length < 3 || userName.value.length > 20) {
          labeluserName.innerText = "El username debe tener mas de 2 caracteres y menos de 20";
          labeluserName.classList.add('text-danger');
          inputUserName.classList.remove('border', 'border-success');
        } else {
          labeluserName.innerText = "";
          inputUserName.classList.add('border', 'border-success');
          labeluserName.classList.remove('text-danger');
        }
        break;
      case 'email':
        if (email.value.length <= 1 || email.value.length > 20) {
          labelEmail.innerText = "El mail debe ser valido";
          labelEmail.classList.add('text-danger');
          inputEmail.classList.remove('border', 'border-success');
        } else {
          labelEmail.innerText = "";
          inputEmail.classList.add('border', 'border-success');
          labelEmail.classList.remove('text-danger');
        }
        break;
      case 'password':
        if (password.value.length < 5) {
          labelPassword.innerText = "La contraseña debe tener minimo 5 caracteres";
          labelPassword.classList.add('text-danger');
          inputPassword.classList.remove('border', 'border-success');
        } else {
          labelPassword.innerText = "";
          inputPassword.classList.add('border', 'border-success');
          labelPassword.classList.remove('text-danger');
        }
        break;
      case 'passwordCheck':
        if (rpassword.value.length < 5) {
          labelRpassword.innerText = "La contraseña debe tener minimo 5 caracteres";
          labelRpassword.classList.add('text-danger');
          inputRpassword.classList.remove('border', 'border-success');
        } else {
          labelRpassword.innerText = "";
          inputRpassword.classList.add('border', 'border-success');
          labelRpassword.classList.remove('text-danger');
        }
        break;
      case 'avatar':
        // console.log(inputAvatar.value);
        const file = inputAvatar.value;
        const reg = /(.*?)\.(jpg|jpeg|png|gif)$/;
        if(!file.match(reg)){
          labelAvatar.innerText = "Debe ser un archivo válido(.jpg|jpeg|png|gif)";
          labelAvatar.classList.add('text-danger');
          labelAvatar.classList.remove('border', 'border-success');
        } else {
          labelAvatar.innerText = "Avatar cargado";
          labelAvatar.classList.add('text-success');
          inputAvatar.classList.add('border', 'border-success');
          labelAvatar.classList.remove('text-danger');
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
    if (name.value == '') {
      errors.push('El campo Nombre no puede quedar vacio');
    }
    if (userName.value == '') {
      errors.push('El campo Username no puede quedar vacio');
    }
    if (email.value == '') {
      errors.push('El campo Email no puede quedar vacio');
    }
    if (password.value == '') {
      errors.push('El campo Password no puede quedar vacio');
    }
    if (rpassword.value == '') {
      errors.push('El campo Repeat Password no puede quedar vacio');
    }
    if (inputAvatar.value == '') {
      errors.push('Debes subir una imagen');
    }

    // console.log(errors.length);
    // console.log(errors); 

    if (errors.length > 0) {
      e.preventDefault();
      errors.forEach(error => {
        ulErrors.classList.add('alert-warning');
        ulErrors.innerHTML += `<li>${error}<li>`;
      })
    } else {
      alert('El usuario paso las validaciones del front')
    }
  
  })
})

