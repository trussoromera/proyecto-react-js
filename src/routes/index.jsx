import React from 'react';
import NavBar from "../components/NavBar";
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from "../containers/ItemListContainer";
import Cart from '../containers/CartContainer';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import NotFound from '../components/NotFound';

export const Routing = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                {/* todo lo que viene despues de : va a ser dinamicamente */}
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:productId" element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};


export default Routing;
