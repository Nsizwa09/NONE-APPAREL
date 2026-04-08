let cart = [];

// Cart functions
function addToCart(name, price) {
  cart.push({ name, price, id: Date.now() });
  updateCart();
  updateCartCount();
  showNotification(`${name} added to cart!`);
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <div>R${item.price}</div>
      </div>
      <button onclick="removeFromCart(${index})" style="background: #ff6b6b; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Remove</button>
    `;
    cartItems.appendChild(itemDiv);
    sum += item.price;
  });

  totalElement.textContent = sum;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
  cartCount.style.display = cart.length > 0 ? "flex" : "none";
}

function openCart() {
  document.getElementById("cart-modal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Mobile menu
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

// Newsletter subscription
function subscribeNewsletter() {
  const email = document.getElementById("email-input").value;
  if (email) {
    showNotification("Thank you for subscribing!");
    document.getElementById("email-input").value = "";
  } else {
    showNotification("Please enter a valid email address.");
  }
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!");
    return;
  }

  showNotification("Checkout functionality coming soon!");
  // Here you would typically integrate with a payment processor
}

// Notification system
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    z-index: 3000;
    font-weight: 500;
    animation: slideInRight 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-in";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Close cart when clicking outside
document.getElementById("cart-modal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeCart();
  }
});

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", function() {
  updateCartCount();
});
