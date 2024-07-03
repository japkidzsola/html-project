document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('#hero form');
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = signUpForm.querySelector('input[name="email"]');
        const email = emailInput.value;

        if (validateEmail(email)) {
            alert('Thank you for signing up!');
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

 // Toggle navigation menu on small screens
 const navToggle = document.querySelector('.nav-toggle');
 const navMenu = document.querySelector('nav ul');
 navToggle.addEventListener('click', function () {
     navMenu.classList.toggle('visible');
 });


 document.addEventListener('DOMContentLoaded', function () {
    let cart = [];

    // Function to update cart count
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = cart.length;
    }

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = button.closest('.product');
            const productName = product.querySelector('h3').innerText;
            cart.push(productName);
            updateCartCount();
            alert(`${productName} has been added to your cart!`);
            // Store cart in local storage or update server if needed
        });
    });

    // Function to show cart items (could be expanded with a modal or separate page)
    document.querySelector('.cart-icon').addEventListener('click', function () {
        if (cart.length === 0) {
            alert('Your cart is empty.');
        } else {
            alert('Items in your cart:\n' + cart.join('\n'));
        }
    });

    updateCartCount();
});