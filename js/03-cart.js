/*
 * Працюємо з колекцією товарів в кошику:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {},
    add(product) {
      for (const item of this.items) {
        if (item.name === product.name) {
          item.quantity += 1;
          return;
        }
      }
      const newProduct = {
        ...product,
        quantity: 1,
      }
      this.items.push(newProduct)
    },
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };
  
 
  // console.table(cart.getItems());
  
  cart.add({ name: '🍎', price: 50 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍓', price: 110 });
  cart.add({ name: '🍋', price: 60 });
   
  console.log(cart.items);
  // console.table(cart.getItems());
  
  cart.remove('🍎');
  // console.table(cart.getItems());
  
  // cart.clear();
  // console.table(cart.getItems());
  
  // cart.increaseQuantity('🍎');
  // console.table(cart.getItems());
  
  // cart.decreaseQuantity('🍋');
  // cart.decreaseQuantity('🍋');
  // console.table(cart.getItems());
  
  // console.log('Total: ', cart.countTotalPrice());