import { Routes, Route } from 'react-router-dom';
import NavigationComponent from "./src/routes/navigation/navigation.component.jsx";
import HomeComponent from "./src/routes/home/home.component.jsx";
import DirectoryComponent from "./src/components/directory/directoryComponent.jsx";
import {categories} from "./__mocks__/MockData.js";
import {Fragment} from "react";

const Shop = () => {
  return <h1>I am the Great Cornholio!</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationComponent />} >
        <Route index element={<HomeComponent />} />

        <Route path='shop' element={<Shop />} />
        {/*<Route path='sign-in' element={<SignIn />} />*/}
      </Route>
    </Routes>
  );
}

export default App;