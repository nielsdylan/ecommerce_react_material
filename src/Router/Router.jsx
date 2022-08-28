import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from "../Components/NavBar";
import Product from "../Components/Products/Product";
import ListProducts from "../Container/ListProducts";

const Router = () => {
    return ( 
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes >
                {/* <Route path="/" exact element={<App />} /> */}
                <Route path="/" exact element={<ListProducts />} />
                <Route path="/producto" exact element={<Product />} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Router;