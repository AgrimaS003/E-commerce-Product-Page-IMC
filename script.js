let cart = [];

    function addToCart(productName, price) {
      cart.push({ productName, price });
      updateCart();
    }

    function updateCart() {
      const cartContainer = document.getElementById('cart');
      cartContainer.innerHTML = ' ';

      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<span>${item.productName}</span><span>$${item.price.toFixed(2)}</span>`;
        cartContainer.appendChild(cartItem);
      });
    }

    function viewCart() {
      alert('Items in Cart:\n' + cart.map(item => `${item.productName} - $${item.price.toFixed(2)}`).join('\n'));
    }