import './cart-icon.component.scss';
import ShoppingIcon from "../../assets/cart-icon.svg?react";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";

function CartIcon() {
  const { cartItemCount } = useContext(CartContext);

  console.log(cartItemCount);

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemCount}</span>
    </div>
  );
}
export default CartIcon;