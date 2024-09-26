
const cart = JSON.parse(localStorage.getItem('produits')) || []; 


document.getElementById('sumbiting').addEventListener('click',() => {
  // add quantity of product in HTML and HERE!
  // add description too in HTML and HERE!
    const input1 = document.querySelector('.input1');    
    const input2 = document.querySelector('.input2');
    const input3 = document.querySelector('.input3');
    const input4 = document.querySelector('.input4');
    
    // NAME and REF and PRICE are requried 
    if (input1.value && input2.value && input3.value ) {
        const Name = input1.value;
        const Ref = input2.value;
        const Price = input3.value;
        const ImageNotCorrect = input4.value;
        const toRemove = 'C:\\fakepath\\';
         const index = ImageNotCorrect.indexOf(toRemove);
         const Image = ImageNotCorrect.slice(0,index) + ImageNotCorrect.slice(index + toRemove.length);
         
        let message = '';
        let inImage = '';

        if (cart.some(obj => obj.Ref === Ref)) {
          message = `<p class="message" ><strong style="color:red" > this product exist!</strong>`
          
            
        } else {
            cart.push({Name,Ref,Price,Image});
            // add quantity and  if exist add that quantity
            // add rating 
            message = `<p class="message" ><strong style="color:green" > New prodect Adedd!</strong> <br>
             Name of the Product: ${Name} <br>
             Reférence : ${Ref} <br>
             Price : ${Price} Dt per unit
              </p>`
              inImage = `
              <img  src="../sources/${Image}" alt="${Name}">
            

          `;
            input1.value = '';
            input2.value = '';
            input3.value = '';
            input4.value = '';
            console.log(inImage);
            

        }
        document.querySelector('.data').style.display = 'inline-block';
        document.querySelector('.data').innerHTML = message;
        document.querySelector('.image').innerHTML = inImage;


    }

    console.log(cart);
    const save = JSON.stringify(cart);
    localStorage.setItem('produits',save);
})
