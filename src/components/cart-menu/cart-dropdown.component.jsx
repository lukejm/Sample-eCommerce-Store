import './cart-dropdown.styles.scss';
import Button from "../button/button.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import {Link} from "react-router-dom";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(product => <CartItem key={product.id} product={product} />)}
      </div>
      <Link className='' to='/checkout'>
        <Button>Go To Checkout</Button>
      </Link>
    </div>
  );
}

export default CartDropdown;