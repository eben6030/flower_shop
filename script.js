// Array to hold the items in the cart
let cart = [];

// Function to add item to the cart
function addToCart(item) {
    cart.push(item);
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item at the given index
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = ""; // Clear current cart display

    if (cart.length > 0) {
        let total = 0;

        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.textContent = `${item.name} - $${item.price}`;

            // Remove button for each item
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove-btn");
            removeBtn.onclick = () => removeFromCart(index);

            itemDiv.appendChild(removeBtn);
            cartContainer.appendChild(itemDiv);

            total += item.price;
        });

        // Display total price
        const totalDiv = document.createElement("div");
        totalDiv.textContent = `Total: $${total.toFixed(2)}`;
        totalDiv.style.fontWeight = "bold";
        totalDiv.style.marginTop = "10px";
        cartContainer.appendChild(totalDiv);
    } else {
        cartContainer.textContent = "Your cart is empty.";
    }
}
