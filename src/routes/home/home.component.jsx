import DirectoryComponent from "../../components/directory/directory.component.jsx";
import {Outlet} from "react-router-dom";

const categories = [
  {
    id: "1",
    title: "electronics",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "electronics"
  },
  {
    id: "2",
    title: "men's clothing",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "mens"
  },
  {
    id: "3",
    title: "women's clothing",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "womens"
  },
  {
    id: "4",
    title: "jewelery",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "jewelery"
  }
];


function HomeComponent() {
  return (
    <>
      <DirectoryComponent categories={categories} />
      <Outlet />
    </>
  );
}

export default HomeComponent;
