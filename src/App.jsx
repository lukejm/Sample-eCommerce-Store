import './App.css'
import ProductCategories from "./components/productCategories/ProductCategories.jsx";

function App() {

  const categories = ["electronics","jewelery","men's-clothing","women's-clothing"];

  return (
    <>
      <ProductCategories categories={categories}/>
    </>
  );
}

export default App
