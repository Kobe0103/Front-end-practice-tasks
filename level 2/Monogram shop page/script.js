// Add interactivity (e.g., cart functionality)
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Product added to cart!');
            // Update cart count or other functionality here
        });
    });
});