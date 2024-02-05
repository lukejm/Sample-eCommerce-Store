import {ProductsContext} from "../../context/products.context.jsx";
import {useContext} from "react";
import './shop.styles.scss';
import ProductCard from "./product-card.component.jsx";

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Shop;