import './directory.styles.scss';
import DirectoryItem from "./directory-item.component.jsx";

function DirectoryComponent({ categories }) {

  return (
    <div className='directory-container'>
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
        ))}
    </div>
  );
}

export default DirectoryComponent;