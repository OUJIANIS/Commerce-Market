const cart = JSON.parse(localStorage.getItem('produits')) || [];












document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const productReferenceInput = document.getElementById('productReference');
    const productQuantityInput = document.getElementById('productQuantity');
    const productImage = document.getElementById('productImage');
    const imageUploadInput = document.getElementById('imageUpload');
    const outputDiv = document.getElementById('output');

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Update Product Reference
        const newProductReference = productReferenceInput.value;
        const newProductQuantity = productQuantityInput.value;
        outputDiv.innerHTML = `<p> Updated Product Reference: ${newProductReference}</p>
                    <p>Updated Quantity: ${newProductQuantity}</p>`;

        // Update Product Image
        const file = imageUploadInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                productImage.src = e.target.result;
                outputDiv.innerHTML += `<p>Product image updated successfully.</p>`;
            };
            reader.readAsDataURL(file);
        } else {
            outputDiv.innerHTML += `<p>No new image selected.</p>`;
        }
    });
});