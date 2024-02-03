import DirectoryComponent from "../../components/directory/directory.component.jsx";
// import {categories} from "../../assets/sampleStoreData/categories.js";
import {Outlet} from "react-router-dom";




function HomeComponent({ categories }) {
  return (
    <>
      <DirectoryComponent categories={categories} />
      <Outlet />
    </>
  );
}

export default HomeComponent;
