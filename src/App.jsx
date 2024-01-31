// import './App.css'
import './categories.styles.scss';
import DirectoryComponent from "./components/directory/directoryComponent.jsx";
import {categories} from "./assets/sampleStoreData/categories.js";

function App() {

  return (
    <>
      <DirectoryComponent categories={categories} />
    </>
  );
}

export default App
