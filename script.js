let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R${item.price}`;
    cartItems.appendChild(li);
    sum += item.price;
  });

  total.textContent = sum;
}

/* MOBILE MENU */
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

/* CHECKOUT */
function checkout() {
  alert("Checkout coming soon!");
}