const cart = JSON.parse(localStorage.getItem('cart'));
const products = cart.products;
const cartCounter = document.getElementById("lblCartCount");

let n = localStorage.getItem('counter');
if (n === null) {
    n = 0;
}
else if (n < 0) {
    n = 0;
}
else {
    cartCounter.innerHTML = n;
}

function getCart() {
    const table = document.getElementById('table');
    const sum = document.getElementById('totalsum');
    let i = 0, tax = 0, subtotal = 0, shipping = 5.95, total = 0;
    table.innerHTML = "";
    products.forEach(product => {
        subtotal += parseFloat(product.price * product.quantity);
        tax = parseFloat((subtotal * 0.1025).toFixed(2));
        total = (subtotal + shipping + tax).toFixed(2);
        table.innerHTML +=
            `<tr>
        <td class="border-0 align-middle">
                <img src="${product.img}"
                    alt=""class="img-fluid rounded shadow-sm">
            </td>
            <td class="border-0 align-middle"> <h5 class="mb-0"> <a href="products.html"
                    class="text-dark d-inline-block align-middle">${product.name}</a></h5></td>
        <td class="border-0 align-middle"><strong>${'$' + product.price}</strong></td>
        <td class="border-0 align-middle"><strong>${product.quantity}</strong></td>
        <td class="border-0 align-middle"><button class="btn btn-primary" onclick="deleteItem(${i})"><i
                    class="fa fa-trash"></i></button></td>
    </tr>`;
        i++;
    });
    sum.innerHTML = `<li class="d-flex justify-content-between py-3 border-bottom"><strong
    >Order
    Subtotal </strong><strong>${'$' + subtotal}</strong></li>
    <li class="d-flex justify-content-between py-3 border-bottom"><strong
    >Tax</strong><strong>${'$' + tax}</strong></li>
<li class="d-flex justify-content-between py-3 border-bottom"><strong
   >Shipping and handling</strong><strong>${'$' + shipping}</strong></li>

<li class="d-flex justify-content-between py-3 border-bottom"><strong
    >Total</strong>
<h5 class="font-weight-bold">${'$' + total}</h5>
</li>`;
}

// remove Item from cart
function deleteItem(index) {
    products.splice(index, 1);
    cart.products = products;
    localStorage.setItem('cart', JSON.stringify(cart));
    --n;
    updateCounter();
    getCart();
}

function updateCounter() {
    if (n <= 0) {
        localStorage.setItem("counter", 0);
        cartCounter.innerHTML = 0;
    }
    else {
        localStorage.setItem("counter", n);
        cartCounter.innerHTML = n;
    }
}

getCart();