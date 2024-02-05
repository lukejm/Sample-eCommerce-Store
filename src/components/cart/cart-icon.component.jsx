import './cart-icon.component.scss';
import ShoppingIcon from "../../assets/cart-icon.svg?react";

function CartIcon() {

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
}
export default CartIcon;