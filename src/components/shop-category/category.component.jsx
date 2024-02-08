import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import {CategoryContext} from "../../context/category.context.jsx";
import ProductCard from "../shop/product-card.component.jsx";

function Category() {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(categoryMap[category]);

  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <>
      <div className='category-title'>{category.toUpperCase()}</div>
      <div className='category-container'>
        {products && products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </>
  );
}
export default Category;
