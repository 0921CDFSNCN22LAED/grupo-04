window.addEventListener('load', () => {

  const form = document.querySelector('#form');
  const ulErrors = document.querySelector('.errors')
  const inputs = document.querySelectorAll('input');
  const labelName = document.querySelector('.labelName');
  const inputName = document.querySelector('.input-name');
  const labelImage = document.querySelector('.labelImage');
  const inputImage = document.querySelector('.input-image');
  const labelCategories = document.querySelector('.labelCategories');
  const inputCategories = document.querySelector('.input-category');
  const labelDate = document.querySelector('.labelDate');
  const inputDate = document.querySelector('.input-date');
  const labelDesc = document.querySelector('.labelDesc');
  const inputDesc = document.querySelector('.input-desc');
  const labelRating = document.querySelector('.labelRating');
  const inputRating = document.querySelector('.input-rating');
  const labelPrice = document.querySelector('.labelPrice');
  const inputPrice = document.querySelector('.input-price')

  const validarFormulario = (e) => {
    switch (e.target.name){
      case 'name':
        if(inputName.value.trim().length <=3){
          labelName.innerText = "El nombre debe tener mas de 2 caracteres";
          labelName.classList.add('text-danger');
          inputName.classList.remove('border', 'border-success');
        }else{
          labelName.innerText = "";
          inputName.classList.add('border', 'border-success');
          labelName.classList.remove('text-danger');
        }
        break;
        case 'image':
          // console.log(inputAvatar.value);
          const file = inputImage.value;
          const reg = /(.*?)\.(jpg|jpeg|png|gif)$/;
          if(!file.match(reg)){
            labelImage.innerText = "Debe ser un archivo válido(.jpg|jpeg|png|gif)";
            labelImage.classList.add('text-danger');
            labelImage.classList.remove('border', 'border-success');
          } else {
            labelImage.innerText = "Imagen cargada";
            labelImage.classList.add('text-success');
            inputImage.classList.add('border', 'border-success');
            labelImage.classList.remove('text-danger');
          }
          break;
        case 'rating':
          // ver verificar que sea un numero comprendido entre el 1 y el 10
          if(inputRating.value.trim().length < 1 || inputRating.value.length >= 3) {
            labelRating.innerText = "Debes darle un rating, un numero entre 1 y 10";
            labelRating.classList.add('text-danger');
            inputRating.classList.remove('border', 'border-success');
          }else{
            labelRating.innerText = "";
            labelRating.classList.remove('text-danger');
            inputRating.classList.add('border', 'border-success');
          }
          break;
        case 'price':
          if(inputPrice.value.trim().length < 1 || inputPrice.value.length >= 7){
            labelPrice.innerText = "Debes darle un precio, un numero entre 0 y 1, con un maximo de 4 decimales";
            labelPrice.classList.add('text-danger');
            inputPrice.classList.remove('border', 'border-success');
          }else{
            labelPrice.innerText = "";
            labelPrice.classList.remove('text-danger');
            inputPrice.classList.add('border', 'border-success');
          }
          break;
        case 'desc':
          if(inputDesc.value.trim() == ''){
            labelDesc.innerText = "Debes escribir una descripcion";
            labelDesc.classList.add('text-danger');
            inputDesc.classList.remove('border', 'border-success');
          }else{
            labelDesc.innerText = "";
            labelDesc.classList.remove('text-danger');
            inputDesc.classList.add('border', 'border-success');
          }
          break;
        case 'date':
          if(inputDate.value.trim() == ''){
            labelDate.innerText = "Debes seleccionar una fecha";
            labelDate.classList.add('text-danger');
            inputDate.classList.remove('border', 'border-success');
          }else{
            labelDate.innerText = "";
            labelDate.classList.remove('text-danger');
            inputDate.classList.add('border', 'border-success');
          }    

    }
  }

  inputs.forEach(input => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });

  inputDesc.addEventListener('keyup', validarFormulario);
  inputDesc.addEventListener('blur', validarFormulario);

  form.addEventListener('submit', (e) => {
    ulErrors.innerHTML = '';
    let errors = [];
    if (inputName.value.trim() == '') {
      errors.push('El campo Nombre no puede quedar vacio');
    }
    if (inputRating.value.trim() == '') {
      errors.push('El campo Rating no puede quedar vacio');
    }
    if (inputImage.value == '') {
      errors.push('El campo Imagen no puede quedar vacio');
    }
    if (inputCategories.value.trim() == '') {
      errors.push('El campo categoria no puede quedar vacio');
    }
    if (inputDate.value.trim() == '') {
      errors.push('El campo Fecha no puede quedar vacio');
    }
    if (inputDesc.value.trim() == '') {
      errors.push('El campo Descripcion no puede quedar vacio');
    }
    if(inputPrice.value.trim() == ''){
      errors.push('El campo Price no puede quedar vacio');
    }

    console.log(errors.length);
    console.log(errors); 

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