// to display shopping cart

const openCartButtons = document.querySelectorAll('[data-cart-target]');
const closeCartButtons = document.querySelectorAll('[data-cart-close-button]');
const overlay = document.querySelector('.overlay');

openCartButtons.forEach(button =>{
    button.addEventListener('click', () => {
    const cart = document.querySelector(button.dataset.cartTarget);
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
    if (cart == null) return;
    cart.classList.add('active');
    overlay.classList.add('active');
    console.log(overlay.classList);
}

function closeCart (cart){
    if (cart == null) return;
    cart.classList.remove('active');
    overlay.classList.remove('active');
}

// to animate treat cards on mobile devices
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

// to display contact information
const contactButtons = document.querySelectorAll('[data-contact-target]');
const closeContactButtons = document.querySelectorAll('[data-contact-close-button]');
contactButtons.forEach(button =>{
    
    button.addEventListener('click', () =>{
        const contactCard = document.querySelector(button.dataset.contactTarget);
        openContactCard(contactCard);
    })
})

function openContactCard(contactCard){
    contactCard.classList.add('active');
    overlay.classList.add('active');
}

closeContactButtons.forEach(button =>{
    button.addEventListener('click', () => {
        const contactCard = button.closest('#contact_card');
        closeContactCard(contactCard);
    });
});

function closeContactCard(contactCard){
    contactCard.classList.remove('active');
    overlay.classList.remove('active');
}