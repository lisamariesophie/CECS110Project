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


function addToCart(product) {
    // Retrieve the cart object from local storage
    let found = 0;
    if (localStorage && localStorage.getItem('cart')) {
        console.log("Cart found");
        var cart = JSON.parse(localStorage.getItem('cart'));
        for (let cartProduct of cart.products) {
            console.log(cartProduct.name);
            if (product.name === cartProduct.name) {
                cartProduct.quantity += 1;
                found = 1;
            }
        }
        if (found === 0) {
            product.quantity += 1;
            cart.products.push(product);
            ++n;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCounter();
    }
}

function updateCounter() {
    localStorage.setItem("counter", n);
    cartCounter.innerHTML = n;
}