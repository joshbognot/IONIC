function triggerMode() {
    
    const name = document.getElementById('name').value || 'No inputted name!'
    const product_name = document.getElementById('product_name').value || 'No inputted product name!'
    const price = document.getElementById('price').value || 'Input a price!'
    const discount = document.getElementById('discount').value || 'Select a discount option!'

    const fixedDiscount = price * 0.10
    const finalPrice = price - fixedDiscount || 'Cannot compute final price!'

        if (discount == 'Yes') {
            document.getElementById('resDiscount').style.display = 'block'
            document.getElementById('resFinalPrice').style.display = 'block'

            document.getElementById('resName').innerHTML = `Name: ${name}`
            document.getElementById('resProductName').innerHTML = `Price Name: ${product_name}`
            document.getElementById('resPrice').innerHTML = `Price: ${price}`
            document.getElementById('resDiscount').innerHTML = `Discount: ${discount}`
            document.getElementById('resFinalPrice').innerHTML = `Final Price: ${finalPrice}`

        } else {
            document.getElementById('resDiscount').style.display = 'none'
            document.getElementById('resFinalPrice').style.display = 'none'

            document.getElementById('resName').innerHTML = `Name: ${name}`
            document.getElementById('resProductName').innerHTML = `Price Name: ${product_name}`
            document.getElementById('resPrice').innerHTML = `Price: ${price}`
        }

}