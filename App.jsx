import { Routes, Route } from 'react-router-dom';
import NavigationComponent from "./src/routes/navigation/navigation.component.jsx";
import HomeComponent from "./src/routes/home/home.component.jsx";
import {categories} from "./src/assets/sampleStoreData/categories.js";
import SignOut from "./src/routes/sign-out/sign-out.component.jsx";
import AuthComponent from "./src/routes/authentication/auth.component.jsx";
import Shop from "./src/components/shop/shop.component.jsx";


function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationComponent />} >
        <Route index element={<HomeComponent categories={categories}/>} />

        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<AuthComponent />} />
        <Route path='sign-out' element={<SignOut />} />
      </Route>
    </Routes>
  );
}

export default App;