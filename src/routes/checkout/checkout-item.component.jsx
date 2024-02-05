import './checkout-item.component.scss';
import {CartContext} from "../../context/cart.context.jsx";
import {useContext} from "react";

function CheckoutItem({ cartItem }) {
  const { removeSingleCartItem, removeItemCategoryFromCart, addItemToCart } = useContext(CartContext);
  const { title, price, quantity, image } = cartItem;

  const priceToCurrency = () => {
    return price.toFixed(2);
  }
  const productCategoryTotal = () => {
    return (price * quantity).toFixed(2);
  }

  const increaseCartCount = () => {
    addItemToCart(cartItem);
  }

  const removeItem = () => {
    removeSingleCartItem(cartItem);
  }

  const removeCategory = () => {
    removeItemCategoryFromCart(cartItem);
  }

  return (
    <div className='checkout-item-container'>
      <img className='image-container' src={image} alt={image} />
      <span className='name'>{title}</span>
      <button onClick={removeItem}>&lt;</button><span className='quantity'>{quantity}</span><button onClick={increaseCartCount}>&gt;</button>
      <span className='price'>${priceToCurrency()}</span>
      <span className='price'>${productCategoryTotal()}</span>
      <button className='remove-button' onClick={removeCategory}>&#10005;</button>
    </div>
  );
}
export default CheckoutItem;