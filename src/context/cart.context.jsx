import {createContext, useEffect, useState} from "react";

const addToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    console.log('true');
    return cartItems.map((cartItem) =>
      (cartItem.id === productToAdd.id)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0
});



export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] =  useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  const addItemToCart = (product) => {
    // setCartCount(cartCount + 1);
    setCartItems(addToCart(cartItems, product));
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}