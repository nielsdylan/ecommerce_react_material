import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from "../Components/NavBar";
import Product from "../Components/Products/Product";
import ListCartShopping from "../Container/ListCartShopping";
import ListProducts from "../Container/ListProducts";
import { shoppingInitialState, ShoppingReducers } from "../Reducers/ShoppingReducers";

const Router = () => {
    const [state, dispatch] = useReducer(ShoppingReducers, shoppingInitialState);
    return ( 
        <BrowserRouter>
            <NavBar quantity={state.quantity} ></NavBar>
            <Routes >
                {/* <Route path="/" exact element={<App />} /> */}
                <Route path="/" exact element={<ListProducts dispatch={dispatch} />} />
                <Route path="/producto" exact element={<Product />} />
                <Route path="/carrito" exact element={<ListCartShopping cart={state.cart} />} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Router;