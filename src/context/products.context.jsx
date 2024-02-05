import {createContext, useState} from "react";

import PRODUCTS from '../assets/sampleStoreData/products.json';

export const ProductsContext = createContext({
  products: []
});

export function ProductProvider({children}) {
  const [products, setProducts] = useState(PRODUCTS);
  const value = {products};

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}