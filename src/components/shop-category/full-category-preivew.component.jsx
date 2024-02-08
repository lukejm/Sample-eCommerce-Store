import {CategoryContext} from "../../context/category.context.jsx";
import {useContext} from "react";
import CategoryPreview from "./category-preview.component.jsx";

function FullCategoryPreview() {
  const { categoryMap } = useContext(CategoryContext);

  return (
    <>
      {categoryMap && Object.keys(categoryMap).map(title => (
        <CategoryPreview key={title} title={title} products={categoryMap[title]} />))}
    </>
  );
}
export default FullCategoryPreview;