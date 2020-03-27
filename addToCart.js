const cartCounter = document.getElementById("lblCartCount");
let n = localStorage.getItem('counter');
if (n === null) {
    n = 0;
}
else if (n < 0) {
    n = 0;
} else {
    cartCounter.innerHTML = n;
}

if ((!localStorage.getItem('cart'))) {
    let cart = {};
    cart.products = [];
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to cart Button Listener
let allButtons = document.getElementsByClassName("addBtn");
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function (e) {
        let data = e.target.parentNode.parentNode.parentNode.parentNode.dataset;
        let product = {};
        product.name = data.name;
        product.price = data.price;
        product.quantity = 0;
        product.img = e.target.parentNode.parentNode.parentNode.childNodes[1].src;
        addToCart(product);
    });
}

// Add Item to Cart
function addToCart(product) {
    let found = 0;
    // Retrieve the cart object from local storage
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        for (let cartProduct of cart.products) {
            // Item already in cart
            if (product.name === cartProduct.name) {
                cartProduct.quantity += 1;
                found = 1;
            }
        }
        // Item not in cart
        if (found === 0) {
            product.quantity += 1;
            cart.products.push(product);
            ++n;
        }
        // update localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCounter();
        // User Feedback added to cart
        const toastbody = document.getElementById('toastbody');
        toastbody.innerHTML = `${product.name} was added to your order!`;
        $('.toast').toast('show');
    }
}

// Update the Cart Count
function updateCounter() {
    localStorage.setItem("counter", n);
    cartCounter.innerHTML = n;
}