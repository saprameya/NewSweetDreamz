const openCartButtons = document.querySelectorAll('[data-cart-target]');
const closeCartButtons = document.querySelectorAll('[data-cart-close-button]');

openCartButtons.forEach(button =>{
    button.addEventListener('click', () => {
    console.log(button.id);

    const cart = document.querySelector(button.dataset.cartTarget);
    console.log(cart.classList);

        console.log(document.querySelector(button.dataset.cartTarget))
        openCart(cart);
    });
});

 

closeCartButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const cart = button.closest('#cart_card');
        closeCart(cart);
    });
});

function openCart (cart){
    console.log("here");

    if (cart == null) return;
    cart.classList.add('active');
    console.log(cart.classList);
}

function closeCart (cart){
    if (cart == null) return;
    cart.classList.remove('active');
}