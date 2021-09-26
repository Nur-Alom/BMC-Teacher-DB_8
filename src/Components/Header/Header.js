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
                    <button className="login-btn"><i className="fas fa-sign-in-alt"></i> Login</button>
                </div>
            </nav>
            <div className="header-detail">
                <h1 className="text-white">BMC Teachers Database</h1>
                <hr />
                <h4 className="text-warning">List of Some Teachers and Their <br />Salaries. You can Also Calculate There's Salaries.</h4>
                <h5 className="d-flex justify-content-around mt-3">
                    <article className="text-white">Total Teachers: 12</article>
                    <article className="text-white">Total Budget: 5 Lakhs</article>
                </h5>
            </div>
        </div>
    );
};

export default Header;