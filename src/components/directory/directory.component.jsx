import CategoryItemComponent from "../product-categories/category-item.component.jsx";
import './directory.styles.scss';

function DirectoryComponent({ categories }) {

  return (
    <div className='directory-container'>
      {categories.map(category => (
        <CategoryItemComponent key={category.id}
                               imageUrl={category.imageUrl}
                               title={category.title} />
      ))}
    </div>
  );
}

export default DirectoryComponent;