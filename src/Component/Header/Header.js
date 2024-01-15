import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
            {/* <div id="preloder">
                <div className="loader" />
            </div> */}

            <div>
                <div className="offcanvas-menu-overlay" />
                <div className="offcanvas-menu-wrapper">
                    <div className="offcanvas__close">+</div>
                    <ul className="offcanvas__widget">
                        <li><span className="icon_search search-switch" /></li>
                        <li><a href="#"><span className="icon_heart_alt" />
                            <div className="tip">2</div>
                        </a></li>
                        <li><a href="#"><span className="icon_bag_alt" />
                            <div className="tip">2</div>
                        </a></li>
                    </ul>
                    <div className="offcanvas__logo">
                        <NavLink to="./index.html"><img src="assets/img/logo.png" alt /></NavLink>
                    </div>
                    <div id="mobile-menu-wrap" />
                    <div className="offcanvas__auth">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </div>
            </div>

            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <NavLink to="./"><img src="/assets/img/logo.png" alt /></NavLink>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><NavLink to="./">Home</NavLink></li>
                                    <li><NavLink to="#">Women's</NavLink></li>
                                    <li><NavLink to="#">Men's</NavLink></li>
                                    <li><NavLink to="./shop">Shop</NavLink></li>
                                    <li><NavLink to="#">Pages</NavLink>
                                        <ul className="dropdown">
                                            <li><NavLink to="./productdetail">Product Details</NavLink></li>
                                            <li><NavLink to="./shopcart">Shop Cart</NavLink></li>
                                            <li><NavLink to="./checkout">Checkout</NavLink></li>
                                            <li><NavLink to="./blogdetail">Blog Details</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="./blog">Blog</NavLink></li>
                                    <li><NavLink to="./contact">Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <NavLink to="#">Login</NavLink>
                                    <NavLink to="#">Register</NavLink>
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch" /></li>
                                    <li><a href="#"><span className="icon_heart_alt" />
                                        <div className="tip">2</div>
                                    </a></li>
                                    <li><a href="#"><span className="icon_bag_alt" />
                                        <div className="tip">2</div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;