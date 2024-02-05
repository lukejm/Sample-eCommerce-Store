import './checkout.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import CheckoutItem from "./checkout-item.component.jsx";

function Checkout() {
  const { cartItems, cartItemCount, totalCost } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <span className='checkout-header'>Checkout</span>
      {cartItems.map((product) => (
        <CheckoutItem key={product.id} product={product} />
      ))}

      <div className='total'>TOTAL: ${totalCost}</div>
    </div>
  );
}
export default Checkout;