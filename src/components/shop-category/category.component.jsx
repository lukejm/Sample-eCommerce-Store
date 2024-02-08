import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import {CategoryContext} from "../../context/category.context.jsx";
import ProductCard from "../shop/product-card.component.jsx";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoryContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log("FRAML::", category);
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
