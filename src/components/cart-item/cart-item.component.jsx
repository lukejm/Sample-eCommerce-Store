import './cart-item.styles.scss';

const priceLine = (price, quantity) => {
  return (
    quantity + ' x ' + price + ' = ' + (quantity * price)
  );
}

function CartItem({ product }) {
  const { name, price, image, quantity } = product;

  return (
    <div className='cart-item-container'>
      <img src={image} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className=''>{priceLine(price, quantity)}</span>
      </div>
    </div>
  );
}
export default CartItem;