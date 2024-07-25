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

const treats = document.querySelectorAll('[data-treat-card]');



function addVisibleClass(entries){

    setTimeout(() => entries.forEach(entry => {
        const visible = entry.target;

        if(entry.isIntersecting){
           visible.classList.add('visible');
        }
        else{ 
        visible.classList.remove('visible');
        }

    }), 500)
}

const options = {
    rootMarin: "500px",
    threshold: 1
}

const observer = new IntersectionObserver(addVisibleClass, options);
treats.forEach(treat => {
    observer.observe(treat);
});


