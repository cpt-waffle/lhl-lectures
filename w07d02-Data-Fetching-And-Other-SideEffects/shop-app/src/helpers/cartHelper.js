// cartHelper(cart [], products [])
// returns an array of carts with product name and price
// [{name: '', price: 0} ...]

export function cartHelper(cart, products) {
    const enhancedCart = [];
    for (let id of cart) {
        for (let product of products) {
            if (id === product.id) {
                enhancedCart.push({name: product.name, price: product.price})
            }
        }
    }
    return enhancedCart
  }
