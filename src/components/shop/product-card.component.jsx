import './product-card.styles.scss';
import Button from "../button/button.component.jsx";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { id, name, price, image } = product;

  const addToCart = () => {
    addItemToCart(product);
  }

  return (
    <div className='product-card-container'>
      <img src={image} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addToCart}>Add to cart.</Button>
    </div>
  );
}
export default ProductCard;