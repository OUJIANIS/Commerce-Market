const cart = JSON.parse(localStorage.getItem('produits')) || []; 

// Build HTML string first, then insert it all at once
const productsListElement = document.querySelector('.products-list');
let productHTML = '';

cart.forEach(element => {
    productHTML += `
        <div class="product-item">
            <p>${element.Name} - ${element.Price}</p>
            <button 
                data-ref-number="${element.Ref}" 
                data-product-name="${element.Name}" 
                class="delete-product-button">Delete</button>
        </div>
    `;
});

productsListElement.innerHTML = productHTML;

// Event listener for delete buttons
const deleteButtons = document.querySelectorAll('.delete-product-button');
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const refToDelete = button.dataset.refNumber;
        const nameToDelete = button.dataset.productName;

        // Filter out the item to be deleted
        const updatedCart = cart.filter(product => !(product.Name === nameToDelete && product.Ref === refToDelete));

        // Update localStorage
        localStorage.setItem('produits', JSON.stringify(updatedCart));

        // Remove the product's parent div (the entire product display) from the DOM instantly
        button.closest('.product-item').remove(); 
    });
});
