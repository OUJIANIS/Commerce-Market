


const products = JSON.parse(localStorage.getItem('produits')) || [];
// TIME FORMAT 'day','month','year'
// you can changet from 'momentJS.com' 
const time = moment().format('LL'); 
console.log(time);

let productHtml = '';
products.forEach(product => {
    // this dosn't work because there is not product.rating in the object add that in products.js
    
    const ratingStars = '⭐'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    
    console.log(product.Image,product.Name);
    // adding rating stars and calculate when clicked
   

    productHtml += `
        <div class="display-products" >
        <div><img class="image-product" src="../sources/${product.Image}"></div>
            <h1>${product.Name}</h1>
            <div>${ratingStars}</div>
            <p class="price">${product.Price}Dt</p>
            <button data-product-name="${product.Name}" class="add-to-cart adding">Add to Cart</button>

        </div>
    `
    
});
document.querySelector('.add-product').innerHTML = productHtml;

 
const cart = [];

let Quantity = 0;
document.querySelectorAll('.adding')
.forEach((button) => {
    button.addEventListener('click', () => {
        Quantity++;
       const productName = button.dataset.productName;
        console.log(productName);
            let light = true;
            let price ;
            cart.forEach((product) => {
                if (product.productName == productName && cart.length > 0) {
                    product.quantity +=1;
                    light = false;
                }
            })
            products.forEach((element) => {
                if ( element.Name === productName ) {
                    price = element.Price;
                }
            })
            
                
                if(light == true) {
                    cart.push({
                        productName,
                        price,
                        quantity:1
                    })
                }
            console.log(cart);
            
            console.log(Quantity);

        
            document.querySelector('.quantity').innerHTML = Quantity;
    });
});







