import {createContext, useState} from "react";

const addToCart = (cartItems, productToAdd) => {
  cartItems.forEach((el) => {
    if (el.id === productToAdd.id) {
      el.quantity++;
      return cartItems;
    }
  });
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
});



export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] =  useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems(addToCart(cartItems, product));
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}