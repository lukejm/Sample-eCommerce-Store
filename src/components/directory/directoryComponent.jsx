import CategoryItem from "../product-categories/category.item.jsx";

function DirectoryComponent({ categories }) {

  return (
    <div className='directory-container'>
      {categories.map(category => (
        <CategoryItem key={category.id}
                      imageUrl={category.imageUrl}
                      title={category.title} />
      ))}
    </div>
  );
}

export default DirectoryComponent;