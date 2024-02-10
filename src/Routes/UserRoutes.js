import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Container/Home/Home';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import Blog from '../Container/Blog/Blog';
import BlogDetails from '../Container/BlogDetails/BlogDetails';
import Checkout from '../Container/Checkout/Checkout';
import Contact from '../Container/Contact/Contact';
import ProductDetails from '../Container/ProductDetails/ProductDetails';
import Shop from '../Container/Shop/Shop';
import ShopCart from '../Container/ShopCart/ShopCart';
import LoginSignup from '../Container/LoginSignup/LoginSignup';

function UserRoutes(props) {
    return (
        <>
            <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/blog' element={<Blog />} />
                    <Route exact path='/blogdetail' element={<BlogDetails/>} />
                    <Route exact path='/checkout' element={<Checkout/>} />
                    <Route exact path='/contact' element={<Contact/>} />
                    <Route exact path='/productdetail' element={<ProductDetails/>} />
                    <Route exact path='/shop' element={<Shop/>} />
                    <Route exact path='/shopcart' element={<ShopCart/>} />
                    <Route exact path='/loginSignup' element={<LoginSignup/>} />
                </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;
