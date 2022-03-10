window.addEventListener('load', () => {
  const hearts = document.querySelectorAll('.fa-heart');
  const carts = document.querySelectorAll('.fa-cart-plus');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('text-danger');
  });
});

carts.forEach(cart => {
  cart.addEventListener('click', () => {
    cart.classList.toggle('text-secondary');
  })
})



})