import {createContext, useEffect, useState} from "react";

const addToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
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
  cartItemCount: 0,
  removeSingleCartItem: () => {},
  removeItemCategoryFromCart: () => {},
  totalCost: 0
});



export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] =  useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (total, cartItem) => total + (cartItem.quantity * cartItem.price),
      0
    );
    setTotalCost(total)
  }, [cartItems]);

  const addItemToCart = (product) => {
    // setCartCount(cartCount + 1);
    setCartItems(addToCart(cartItems, product));
  }

  const removeSingleCartItem = () => {
    // to-do
  }

  const removeItemCategoryFromCart = () => {
    // to-do
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    removeSingleCartItem,
    removeItemCategoryFromCart,
    totalCost
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}