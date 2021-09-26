import React from 'react';
import './Header.css';
import logo from './images/logo.jpg'

const Header = () => {
    return (
        <div className="header-main">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img className="logo" src={logo} alt="" />
                    <div className="collapse navbar-collapse btn">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/..">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/..">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/..">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/..">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header-detail">
                <h1>Government BM Collage, Barisal.</h1>
                <h4>About of a List of Teachers and Their Salaries</h4>
                <h5 className="">
                    <span>Total Teachers: 12</span>
                    <span>Total Amount: 0</span>
                </h5>
            </div>
        </div>
    );
};

export default Header;