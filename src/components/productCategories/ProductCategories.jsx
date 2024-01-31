import './productCategories.styles.scss';

function ProductCategories({ categories }) {


  const filterCategoryStringForKey = (category) => {
    return category.replace("'", "");
  }

  const filterCategoryStringForHTML = (category) => {
    return category.replace('-', ' ');
  }

  return (
    <div className='categories-container'>
      {categories.map(category => {
        return (
          <div className='category-container' key={filterCategoryStringForKey(category)}>
            <h2>{filterCategoryStringForHTML(category)}</h2>
            <p>Shop Now</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCategories;