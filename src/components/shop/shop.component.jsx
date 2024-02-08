import './shop.styles.scss';
import Category from "../shop-category/category.component.jsx";
import {Route, Routes} from "react-router-dom";
import FullCategoryPreview from "../shop-category/full-category-preivew.component.jsx";

function Shop() {
  return (
    <Routes>
      <Route index element={<FullCategoryPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}

export default Shop;