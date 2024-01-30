const productData = async () => fetch('src/assets/sampleStoreData/products.json');

const cart = async () => fetch('src/assets/sampleStoreData/cart.json');

const categories = async () => fetch('src/assets/sampleStoreData/categories.json');

const users = async () => fetch('src/assets/sampleStoreData/users.json');


class FetchData {
  getProductData = async () => {
    return await productData();
  }

  getCart = async () => {
    return await cart();
  }

  getCategories = async () => {
    return await categories();
  }

  getUsers = async () => {
    return await users();
  }
}
export default FetchData;