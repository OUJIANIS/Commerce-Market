const cart = JSON.parse(localStorage.getItem('produits')) || []; 

// Build HTML string first, then insert it all at once
const productsListElement = document.querySelector('.products-list');
let productHTML = '';


cart.forEach(element => {
    productHTML += `
        <div class="product-item">
            <img class="image-product" src="${element.Image}" alt="product-image" title="${element.Name}">
            <p>${element.Name} - ${element.Price}</p>
            <button 
                data-ref-number="${element.Ref}" 
                data-product-name="${element.Name}" 
                class="delete-product-button red-button">Delete</button>
            <a href="./modifyProduct.html" target="_blank"><button 
                data-ref-number="${element.Ref}" 
                data-product-name="${element.Name}" 
                class="modify-product-button green-button">Modify</button></a>    
                
                
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

// Event listener for modify buttons
const modifyButtons = document.querySelectorAll('.modify-product-button');
modifyButtons.forEach(button => {
    const refToModify = button.dataset.refNumber;
    const nameToModify = button.dataset.productName;

    // filter the product object

})


