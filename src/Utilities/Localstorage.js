const getStoredCartFromLocalStorage = () => {
      const storedCartStringified = localStorage.getItem('cart');
      if (storedCartStringified) {
            return JSON.parse(storedCartStringified);
      }
      return [];
};

const saveCartToLocalStorage = (cart) => {
      const addCart = JSON.stringify(cart);
      localStorage.setItem('cart', addCart);
};

const addCartToLocalStorage = (flag) => {
      const cart = getStoredCartFromLocalStorage();
      cart.push(flag);

      saveCartToLocalStorage(cart);
};

const removeStoredCart = (flag) => {
      const storedFlag = getStoredCartFromLocalStorage();
      const remaining = storedFlag.filter(flags => flags !== flag);
      saveCartToLocalStorage(remaining);
}

export { addCartToLocalStorage, getStoredCartFromLocalStorage, removeStoredCart }