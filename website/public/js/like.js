window.addEventListener('load', () => {
  const addHearts = document.querySelectorAll('.fa-heart');

  addHearts.forEach(heart => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('text-danger');
      if(heart.classList.contains('text-danger')){
        console.log('puse cora');
        // const like = [{saludo: 'nombre'}, {otroSaludo: 'chau'}];
        // sessionStorage.setItem('kart', JSON.stringify(like));
        // console.log(JSON.parse(sessionStorage.getItem('kart')));
      }else{
        console.log('saque cora');
      }
    });
  });
  
})