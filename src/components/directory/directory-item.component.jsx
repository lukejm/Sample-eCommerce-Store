import {useNavigate} from "react-router-dom";
import CategoryItemComponent from "../shop-category/category-item.component.jsx";

function DirectoryItem({ category }) {
  const { imageURL, title, route } = category;
  const navigate = useNavigate();

  const onNavigationHandler = () => navigate("shop/" + route);

  return (
    <div className='directory-item-container' onClick={onNavigationHandler}>
      <div className='body'>
        <CategoryItemComponent title={title} imageUrl={imageURL} />
      </div>
    </div>
  )
}

export default DirectoryItem;