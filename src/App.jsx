// import './App.css'
import CategoryItemComponent from "./components/productCategories/category-item.component.jsx";
import './categories.styles.scss';
import {categories} from "./assets/sampleStoreData/categories.js";

function App() {

  return (
    <>
      <CategoryItemComponent categories={categories}/>
    </>
  );
}

export default App
