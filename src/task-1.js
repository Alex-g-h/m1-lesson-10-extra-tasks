const groceries = {
    "73Wakv": {
      name: "Orange Juice",
      price: 1.5,
      discount: 10
    },
    "5L3db9": {
      name: "Chocolate",
      price: 2,
      discount: 0
    }
    // more items...
  };


const shoppingBag = [
  { productId: "73Wakv", count: 3 },
  { productId: "5L3db9", count: 23 }
];
  
const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05
  


/**
 * Calculate total price of bag taking into account count and discount
 * @param {*} shoppingBagArray Array of products in format {productId: "Adzx", count: 3}
 * @returns Total price, [string]
 */
function getTotalPriceOfShoppingBag(shoppingBagArray) {
  let totalPrice = 0;
  shoppingBag.forEach(product => {
    let productObj = groceries[product.productId];
    if (!productObj)
      return;

    let productSum = productObj.price * (100 - productObj.discount) / 100;
    productSum *= product.count;
    totalPrice += productSum;
  });
  return totalPrice.toFixed(2);
}