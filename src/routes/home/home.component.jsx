import DirectoryComponent from "../../components/directory/directoryComponent.jsx";
import {categories} from "../../assets/sampleStoreData/categories.js";
import {Outlet} from "react-router-dom";




function HomeComponent() {
  return (
    <>
      <DirectoryComponent categories={categories} />
      <Outlet />
    </>
  );
}

export default HomeComponent
