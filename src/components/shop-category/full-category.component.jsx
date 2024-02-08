import './full-category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import {CategoryContext} from "../../context/category.context.jsx";
import ProductCard from "../shop/product-card.component.jsx";

function FullCategory() {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <>
      <div className='full-category-title'>{category.toUpperCase()}</div>
      <div className='full-category-container'>
        {products && products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </>
  );
}
export default FullCategory;
