import {CategoryContext} from "../../context/category.context.jsx";
import {useContext} from "react";
import './shop.styles.scss';
import ProductCard from "./product-card.component.jsx";

function Shop() {
  const { categoryMap} = useContext(CategoryContext);

  const implementProducts = (category) => (
    <div className='products-container'>
        {category.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );

  return (
    <>
      {Object.keys(categoryMap).map((title) => (
        <div key={title}>
          <h2>{title}</h2>
          <div className='category-container'>
            {implementProducts(categoryMap[title])}
          </div>
        </div>
      ))}
    </>
  );
}

export default Shop;