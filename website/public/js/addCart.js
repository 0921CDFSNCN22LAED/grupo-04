window.addEventListener('load', () => {  
  const addCarts = document.querySelectorAll('.fa-cart-plus');
  const articleContainer = document.querySelector('.cartWrapper');
  const btnBuy = document.querySelector('.btn-buy');

addCarts.forEach(cart => {
  cart.addEventListener('click', (e) => {
    cart.classList.toggle('text-secondary');
    if(cart.classList.contains('text-secondary')){
      // console.log('puse carrito');
      addCardInCartClicked(e);      
    };
  });
});

function addCardInCartClicked(e){
  const btnCart = e.target;
  const item = btnCart.closest('.card-body');
  const itemTitle = item.querySelector('.card-title').textContent.trim();
  const itemImage = item.querySelector('.item-image').src;
  const itemPrice = item.querySelector('.item-price').textContent.trim();
  const itemId = item.querySelector('.item-id').textContent.trim();
  addItemToCart(itemTitle, itemImage, itemPrice, itemId);
};

function addItemToCart(itemTitle, itemImage, itemPrice, itemId){
  const allItemsId = articleContainer.querySelectorAll('.item-id');

  for (let i = 0; i < allItemsId.length; i++){
    if(allItemsId[i].innerText === itemId){
      const item = allItemsId[i].innerText;
      // return para que salga de la funcion y no lo duplique
      return Swal.fire(`El producto id: ${item} ya se encuentra agregado al carrito`); 
    };
  };

 const oneItem = document.createElement('article');
 const cardContent = `
 <div class="d-flex article-item">
 <p class="invisible item-id">${itemId}</p>
 <div class="card mb-3 mx-3 col-xxl card-cart" style="width: 8rem;">
   <img src=${itemImage} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title text-center">${itemTitle}</h5>
   </div>
 </div>
 <div>
   <div class="mt-3">
     <a href="#" class="btn btn-outline-success btn-delete">Eliminar</a>
   </div>
   <div class="mt-3">
     <i class="fas fa-gem mx-1"></i><p class="item-price">${itemPrice}</p>
   </div>
 </div>
 </div>
 `;
 oneItem.innerHTML = cardContent;
 articleContainer.append(oneItem);

 oneItem.querySelector('.btn-delete').addEventListener('click', removeItem);

 updateCartTotal();
};

function updateCartTotal(){
  let total = 0;
  const totalCart = document.querySelector('.total');
  const itemsInCart = document.querySelectorAll('.article-item');
  itemsInCart.forEach(item => {
    const elementItemPrice = item.querySelector('.item-price');
    const itemPrice = Number(elementItemPrice.textContent.replace('ETH', ''));
    total += itemPrice;
  })
  totalCart.innerHTML = `<p3 class="total">Total:<i class="fas fa-gem mx-1"></i>${total.toFixed(4)} ETH</p3>`;
};

function removeItem(e){
  const btnRemove = e.target;
  btnRemove.closest('.article-item').remove();
  updateCartTotal();
};

btnBuy.addEventListener('click', () => {
  if(document.querySelector('.article-item')){
    articleContainer.innerHTML = '';
    updateCartTotal();
    Swal.fire({
      title: 'Gracias por tu compra! Ya sos Team Calamardo!',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });
  }else{
    Swal.fire({
      icon: 'question',
      title: 'Oops...',
      text: 'Todavia no has elegido ningun Calamardo!',
    })
  };
});

});