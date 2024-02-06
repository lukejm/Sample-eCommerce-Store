import {createContext, useEffect, useState} from "react";
// import PRODUCTS from '../assets/sampleStoreData/products.json';
import {addProductsToFirebase, getProductsFromFirebase} from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from '../assets/sampleStoreData/productsWithCategories.js';

export const CategoryContext = createContext({
  categoryMap: []
});

export function ProductProvider({children}) {
  const [categoryMap, setCategoryMap] = useState(null);

  // used to upload fake data to firestore, only use for empty database
  // useEffect(() => {
  //   addProductsToFirebase('categories', SHOP_DATA)
  // },[]);

  useEffect(() => {
    const categoryMap = async () => {
      const data = await getProductsFromFirebase();
      setCategoryMap(data);
      console.log(data);
    }
    categoryMap();
  }, []);

  const value = { categoryMap };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}