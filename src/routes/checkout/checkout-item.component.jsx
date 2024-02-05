import './checkout-item.component.scss';

function CheckoutItem(product) {
  const { title, price, quantity, image } = product;

  return (
    <div className='checkout-item-container'>
      <img className='image-container' src={image} alt={image} />
      <span className='name'>{title}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      {/*<span className='price'>{() => price * quantity}</span>*/}
      <button className='remove-button'>X</button>
    </div>
  );
}
export default CheckoutItem;