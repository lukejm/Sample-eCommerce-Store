const productData = async () => fetch('src/assets/sampleStoreData/products.json');

const cart = async () => fetch('src/assets/sampleStoreData/cart.json');

const categories = async () => {
  const cats = fetch('src/assets/sampleStoreData/categories.json');
  return cats.json();
}

const users = async () => fetch('src/assets/sampleStoreData/users.json');


class FetchData {
  getProductData = async (fetch) => {
    return await productData(fetch);
  }

  getCart = async (fetch) => {
    return await cart(fetch);
  }

  getCategories = async (fetch) => {
    // return await categories(fetch);
    return fetch;
  }

  getUsers = async (fetch) => {
    return await users(fetch);
  }
}
export default FetchData;