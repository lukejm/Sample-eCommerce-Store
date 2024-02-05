import './checkout.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import CheckoutItem from "./checkout-item.component.jsx";

function Checkout() {
  const { cartItems, cartItemCount, totalCost } = useContext(CartContext);

  const priceToCurrency = () => {
    return totalCost.toFixed(2);
  }

  return (
    <div className='checkout-container'>
      <span className='checkout-header'>Checkout</span>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))}

      <div className='total'>TOTAL: ${priceToCurrency()}</div>
    </div>
  );
}
export default Checkout;