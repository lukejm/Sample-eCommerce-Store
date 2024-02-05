import './cart-item.styles.scss';



function CartItem({ product }) {
  const { name, price, image, quantity } = product;

  const priceLine = () => {
    return (
      quantity + ' x ' + price + ' = ' + (quantity * price)
    );
  }

  return (
    <div className='cart-item-container'>
      <img src={image} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className=''>{priceLine()}</span>
      </div>
    </div>
  );
}
export default CartItem;