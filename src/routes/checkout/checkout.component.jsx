import './checkout.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import CheckoutItem from "./checkout-item.component.jsx";

function Checkout() {
  const { cartItems, totalCost } = useContext(CartContext);

  const priceToCurrency = () => {
    return totalCost.toFixed(2);
  }

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price / Unit</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}

      <div className='total'>TOTAL: ${priceToCurrency()}</div>
    </div>
  );
}
export default Checkout;