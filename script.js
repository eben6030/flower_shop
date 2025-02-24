// Array to hold the items in the cart
let cart = [];

// Function to add item to the cart
function addToCart(item) {
    cart.push(item);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = ""; // Clear current cart display

    // Display the items in the cart
    if (cart.length > 0) {
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.textContent = `${item.name} - $${item.price}`;
            cartContainer.appendChild(itemDiv);
        });
    } else {
        cartContainer.textContent = "Your cart is empty.";
    }
}
