import './category-item.styles.scss';

function CategoryItemComponent({ categories }) {


  const filterCategoryStringForKey = (category) => {
    return category.replace("'", "");
  }

  const filterCategoryStringForHTML = (category) => {
    return category.replace('-', ' ');
  }

  return (
    <div className='categories-container'>
      {categories.map(({ title, id, imageUrl }) => {
        return (

          <div className='category-container' key={id}>
            <div className='background-image'
                 style={{backgroundImage: `url(${imageUrl})`}}>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryItemComponent;