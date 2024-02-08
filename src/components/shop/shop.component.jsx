import './shop.styles.scss';
import FullCategory from "../shop-category/full-category.component.jsx";
import {Route, Routes} from "react-router-dom";
import FullCategoryPreview from "../shop-category/full-category-preivew.component.jsx";

function Shop() {
  return (
    <Routes>
      <Route index element={<FullCategoryPreview />} />
      <Route path=':category' element={<FullCategory />} />
    </Routes>
  );
}

export default Shop;